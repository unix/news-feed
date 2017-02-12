/**
 * Created by WittBulter on 2017/2/12.
 */
const {ipcMain} = require('electron')


module.exports = {
	login: (e, user) =>{
		// todo something

		e.reply({msg: 'ok'})
	}
}