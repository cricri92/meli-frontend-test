const fetch = require('node-fetch');
const searchAPIurl = 'sites/MLA';

const searchService = {
	getResults(query) {
		return new Promise((resolve, reject) => {
			console.log(`${process.env.API_URL}/${searchAPIurl}/search?q=${query}`);
			fetch(`${process.env.API_URL}/${searchAPIurl}/search?q=${query}`)
			.then(response => {
				resolve(response.json());
			})
		});
	},
};

module.exports = searchService;