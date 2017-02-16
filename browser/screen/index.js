/**
 * Created by WittBulter on 2017/2/16.
 */
const login = require('./login')
const console = require('./console')
const windowList = {
	login: login,
	console: console
}

module.exports = new class Screen {
	constructor (){
		this.win = null
		this.baseUrl = ''
	}
	static show (win){
		win.show()
		win.focus()
	}

	// 打开一个窗口 默认打开登录窗口
	open (winName = 'login'){
		if (!windowList[winName]) return ;
		this.win = windowList[winName].open(this.baseUrl)

		this.win.on('closed', () => this.win = null)
		this.win.on('ready-to-show', () => Screen.show(this.win))
	}
	setBaseUrl (baseUrl){
		this.baseUrl = baseUrl
		return this
	}
}()