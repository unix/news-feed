/**
 * Created by WittBulter on 2017/2/12.
 */

const {ipcMain} = require('electron')
const api = require('./api')

ipcMain.on('api', (event, actionName, ...args) =>{
	const reply = (replayObj, status = 'success') =>{
		event.sender.send(`${actionName}reply`, replayObj, status);
	}
	if (api[actionName]){
		api[actionName](Object.assign({reply: reply}, event), ...args)
	}
})
