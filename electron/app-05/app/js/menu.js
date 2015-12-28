var remote = require('remote')
var Menu = remote.require('menu')
var MenuItem = remote.require('menu-item')
//---------------------------------
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function() {
    alert('Deleted')
  }
}));
//---------------------------------
menu.append(new MenuItem({
  label: 'More Info...',
  click: function() {
    alert('Here is more information')
  }
}));
//---------------------------------
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);