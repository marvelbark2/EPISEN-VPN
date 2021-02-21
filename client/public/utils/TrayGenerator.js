const { Tray, Menu } = require('electron');
const path = require('path');

class TrayGenerator {
  constructor(mainWindow, status) {
    this.tray = null;
    this.mainWindow = mainWindow;
    this.status = status
  }
  getWindowPosition = () => {
    const windowBounds = this.mainWindow.getBounds();
    const trayBounds = this.tray.getBounds();
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
    const y = Math.round(trayBounds.y + trayBounds.height);
    return { x, y };
  };

  showWindow = () => {
    const position = this.getWindowPosition();
    this.mainWindow.setPosition(position.x, position.y, false);
    this.mainWindow.show();
    this.mainWindow.setVisibleOnAllWorkspaces(true);
    this.mainWindow.focus();
    this.mainWindow.setVisibleOnAllWorkspaces(false);
  };

  toggleWindow = () => {
    if (this.mainWindow.isVisible()) {
        this.mainWindow.hide();
      } else {
        this.showWindow();
      }
  };

  rightClickMenu = () => {
    const menu = [
        {
          role: 'quit',
          accelerator: 'Command+Q'
        }
      ];
      this.tray.popUpContextMenu(Menu.buildFromTemplate(menu));
    
  }

  createTray = () => {
    let icon = path.join(__dirname, '..' ,'./assets/favicon.png');;
    this.tray = new Tray(icon);
    this.tray.setIgnoreDoubleClickEvents(true);
    this.tray.on('right-click', this.toggleWindow);
    this.tray.on('click', this.rightClickMenu);
    
  };
  updateIcon(path) {
      this.tray.setImage(path);
  }
}
module.exports = TrayGenerator;