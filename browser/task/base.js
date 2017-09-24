/**
 * Created by WittBulter on 2017/2/20.
 */
const req = require('request')

module.exports = class Base {
  constructor() {
  
  }
  
  static makeOptions(url) {
    return {
      url: url,
      port: 8080,
      method: 'GET',
      headers: {
        'User-Agent': 'nodejs',
        'Content-Type': 'application/json',
      },
    }
  }
  
  static request(url) {
    return new Promise((resolve, reject) => {
      req(Base.makeOptions(url), (err, response, body) => {
        if (err) return reject(err)
        resolve(body)
      })
    })
  }
  
}
