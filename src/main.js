const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 1100,
        title: 'PS SIGNAL',
        frame: false,
    })

    mainWindow.loadURL(`file://${__dirname}/view/home.html`);

    mainWindow.on('closed', () => {
        console.log('closed')
        mainWindow = null
    })
})
ipc.on('graphic-pm', () => {
    mainWindow.webContents.send('uiGraphic')
})
ipc.on('about-pm', () => {
    mainWindow.webContents.send('uiAboutPm')
})
ipc.on('about-app', () => {
    mainWindow.webContents.send('uiAboutApp')
})
ipc.on('exit-application', () => {
    app.quit();
})