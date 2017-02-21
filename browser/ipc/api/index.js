/**
 * Created by WittBulter on 2017/2/12.
 */
const screen = require('../../screen')
const articleService = require('../../service/article')

module.exports = {
	login: async (e, user) =>{
		// todo something
		screen.setSize(1000, 720)
		return {msg: 'ok'}
	},
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