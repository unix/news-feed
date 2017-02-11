/**
 * Created by WittBulter on 2017/2/11.
 */
const {app, BrowserWindow} = require('electron')

let win // 窗口对象引用 避免被自动关闭
const createWindow = () =>{
	win = new BrowserWindow({
		width: 700,
		height: 500,
		show: false,
	});
	win.loadURL(`file://${__dirname}/dist/index.html`);

	win.webContents.openDevTools();
	win.on('closed', () => win = null)
	win.on('ready-to-show', () =>{
		win.show()
		win.focus()
	})
}

app.on('ready', _ => createWindow())
app.on('window-all-closed', _ => process.platform !== 'darwin'&& app.quit())
app.on('activate', _ => win === null&& createWindow())