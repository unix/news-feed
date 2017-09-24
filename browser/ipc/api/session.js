/**
 * Created by WittBulter on 2017/3/2.
 */

const screen = require('../../screen')

module.exports = {
  login: async(e, user) => {
    // todo something
    screen.setSize(1000, 720)
    return { msg: 'ok' }
  },
  logout: async() => {
    // todo something
    screen.setSize(700, 500)
    return { msg: 'ok' }
  },
}
