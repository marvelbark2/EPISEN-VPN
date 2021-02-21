const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const child = require('child_process');
const fs = require('fs');
const url = require('url');
const shelljs = require('shelljs');

const TrayGenerator = require('./utils/TrayGenerator');
const { autoUpdater } = require('electron-updater');


const { ipcMain } = electron;

const store = {
    id: 1,
    counterValue: 0
  };
  
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 500, height: 800 , webPreferences: {        // add
        nodeIntegration: true  // these
      } });

    // and load the index.html of the app.
    const startUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : url.format({
        pathname: path.join(__dirname, '..','build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

    // Open the DevTools.
    if(process.env.NODE_ENV === 'development')
        mainWindow.webContents.openDevTools();
    
   // Tray menu
   
   const Tray = new TrayGenerator(mainWindow, store);
   Tray.createTray();
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    mainWindow.once('ready-to-show', function() {
        autoUpdater.checkForUpdatesAndNotify();
    });

    ipcMain.on('synchronous-message', (event, arg) => {
        console.log(arg) // affiche "ping"
        event.returnValue = 'pong'
      })
    
    let vpnConnection;
    
    ipcMain.handle('status', async (event, arg) => {
        const resPath = path.join(__dirname,'utils', 'resources', 'credentials');
        const auth = fs.readFileSync(resPath);
        const cmd = 'ping -c1 -q 172.31.240.1 >  /dev/null; echo $?';
        const execute = await child.execSync(cmd);
        var out = execute.toString();
        if(parseInt(out) === 0) {
            Tray.updateIcon(path.join(__dirname,'./assets/vpn_co.png'));
        } else {
            Tray.updateIcon(path.join(__dirname,'./assets/vpn_disco.png'));
        }
        return {
            status: parseInt(out),
            authFile: auth.length === 0 ? false : true
        };
      });
    
      ipcMain.handle('auth', async (event, args) => {
        Tray.updateIcon(path.join(__dirname ,'./assets/vpn_onco.png'));
        console.log(args);
        if(args.save){
            var filePath = path.join(__dirname,'utils', 'resources', 'credentials'),
                data = fs.readFileSync(filePath, 'utf-8'),
                input = args.user + '\n' + args.pass;
                fs.writeFileSync(filePath, input);
        }
        const resPath = path.join(__dirname, 'utils', 'resources');
        const cmd = `cd ${resPath} && ./run.sh`;
        vpnConnection = await child.exec(cmd)
        var result = vpnConnection.toString();
        if(result.includes('Initialization Sequence Completed')){
            fs.writeFileSync(filePath, "");
            return event.returnValue = {status: 0};
        } 
        else if(result.includes('AUTH_FAILED')) {
            fs.writeFileSync(filePath, "");
            return event.returnValue = {status: 1, error: "Authentification Errone"};
        }
        
        else {
            return event.returnValue = {status: -1, error: "unknown : " + result};
        }
      });
    
    
      ipcMain.handle('disconnect', (event, args) => {
        if(vpnConnection != null) {
            process.kill(vpnConnection.pid + 1);
            return 'disconnected'
        }
      });

      ipcMain.handle('ip', (event) => {

      });

      autoUpdater.on('update-available', () => {
        mainWindow.webContents.send('update_available');
      });
      
      autoUpdater.on('update-downloaded', () => {
        mainWindow.webContents.send('update_downloaded');
      });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

