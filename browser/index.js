/**
 * Created by WittBulter on 2017/2/11.
 */
const {app, BrowserWindow} = require('electron')
const screen = require('./browser/screen')
require('./browser/ipc/index')
const url = `file://${__dirname}/dist/index.html`

app.on('ready', _ => screen.setBaseUrl(url).open())
app.on('window-all-closed', _ => process.platform !== 'darwin'&& app.quit())
app.on('activate', _ => screen.activate())
