/**
 * Created by WittBulter on 2017/2/12.
 */
const screen = require('../../screen')

module.exports = {
	login: (e, user) =>{
		// todo something
		screen.setSize(1000, 720)
		e.reply({msg: 'ok'})
	}
}