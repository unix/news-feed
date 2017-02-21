/**
 * Created by WittBulter on 2017/2/21.
 */

module.exports = {
	findArticlesForPage: page =>{
		return new Promise((resolve, reject) =>{
			global.Storage.find({}).sort({id: 1}).skip(page).limit(15)
				.exec((err, data) =>{
					if (err) return reject(err)
					resolve(data)
				})
		})
	}
}