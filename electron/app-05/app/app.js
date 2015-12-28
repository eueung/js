var app = require('app');  
var BrowserWindow = require('browser-window');  
//-------------------------------------
var mainWindow = null;
//-------------------------------------
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
//-------------------------------------
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'min-width': 480,
    'min-height': 360,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  });

  mainWindow.loadURL('file://' + __dirname + '/angular-offline-todo.html');
  mainWindow.setMenu(null);
  
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
//-------------------------------------