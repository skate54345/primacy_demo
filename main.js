const { app, BrowserWindow } = require('electron')


let win

function createWindow () {
  win = new BrowserWindow({width: 1024, height:768, backgroundColor: '#000'})

  win.loadURL('file:///'+ __dirname + '/index.html')
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
var start_range = 0;
var end_range = 0;
function save(){
  start_range = document.getElementById("start_range");
  end_range = document.getElementById('end_range');
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})


global.data = {
  start_range: 0,
  end_range: 100,
  file_path: ''
};

global.data2 = {
  result: 0,
  temp_max: 0
}
