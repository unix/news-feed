/**
 * Created by WittBulter on 2017/3/2.
 */
const articleService = require('../../service/article')

module.exports = {
	list: async (e, page) =>{
		try{
			const articles = await articleService.findArticlesForPage(page)
			// todo filter articles
			return articles
		} catch (err){
			return Promise.reject(err)
		}
	},
	detail: async (e, id) =>{
		try{
			const article = await articleService.findArticleForID(id)
			return article
		} catch (err){
			return Promise.reject(err)
		}
	}
}