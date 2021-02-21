export PATH="/bin:/sbin:/usr/sbin:/usr/bin"
exec 2>&1
exec /Users/user/website/js-projects/episen-vpn/src/resources/openvpn --config /Users/user/website/js-projects/episen-vpn/src/resources/EsipeCreteil.ovpn --management 127.0.0.1 60453
