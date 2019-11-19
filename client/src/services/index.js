const ApiService = {
	get(url, params = {}) {
		return new Promise(
			(resolve, reject) =>
				fetch(url, params)
					.then(res => resolve(res.json())
					).catch(error => reject(error))
		);
	}
};

export default ApiService;