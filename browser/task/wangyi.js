/**
 * Created by WittBulter on 2017/2/20.
 */
const cheerio = require('cheerio')
const Base = require('./base')

module.exports = new class Self extends Base {
	constructor (){
		super()
		this.url = 'http://news.ifeng.com/xijinping/'
	}

	start (){
		// global.Storage.find({}, (err, d) =>{
		// 	console.log(d);
		// })
		this.request()
			.then(res =>{
				console.log('全部储存完毕!');
				global.Storage.loadDatabase()
			})
			.catch(err =>{
				console.log(err);
			})
	}

	async request (){
		try{
			const body = await Self.request(this.url)
			let links = await this.parseLink(body)
			for (let index = 1; index< links.length; index++){
				const content = await Self.request(links[index -1])
				const article = await this.parseContent(content)
				await this.saveContent(Object.assign({id: index}, article))
				console.log(`第${index}篇文章:${article&&article.title}储存完毕`);
			}
		} catch (err){
			return Promise.reject(err)
		}
	}

	parseLink (html){
		const $ = cheerio.load(html)
		return $('.con_lis > a')
			.map((i, el) => $(el)
				.attr('href'))
	}

	parseContent (html){
		if (!html) return;
		const $ = cheerio.load(html)
		const title = $('title').text()
		const content = $('.yc_con_txt').html()
		return {title: title, content: content}
	}
	saveContent (article){
		if (!article|| !article.title) return ;
		return global.Storage.insert(article)
	}
}()

