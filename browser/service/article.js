/**
 * Created by WittBulter on 2017/2/21.
 */

module.exports = {
	findArticlesForPage: page =>{
		return new Promise((resolve, reject) =>{
			global.Storage
				.find({})
				.projection({content: 0})
				.sort({id: 1})
				.skip(page)
				.limit(15)
				.exec((err, data) =>{
					if (err) return reject(err)
					resolve(data)
				})
		})
	},
	findArticleForID: id =>{
		return new Promise((resolve, reject) =>{
			global.Storage
				.findOne({_id: id})
				.exec((err, data) =>{
					if (err) return reject(err)
					resolve(data)
				})
		})
	}
}