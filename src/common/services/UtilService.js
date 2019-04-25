export default class UtilService {
	constructor({ baseUrl = '' }) {
		this._baseUrl = baseUrl;
		this._cache = {};
	}
	
	async request (path, method = 'get', {
		credentials = 'include',
		cache = false,
	} = {}) {
		const fullUrl = `${this._baseUrl}/${path}`;
		let options;
		switch (method.toUpperCase()) {
			case 'GET': {
				const cachedData = this._cache[path];
				if (cache && cachedData !== undefined) {
					return cachedData;
				}
				break;
			}
			case 'POST':
			case 'PUT':
			case 'PATCH':
				options = {
					method,
					credentials,
					'Content-Type': 'application/json',
				};
				break;
			default:
				throw new Error('Method not yet supported');
		}
		try {
			const res = await fetch(fullUrl, options);
			if (res.ok) {
				const data = await res.json();
				if (cache) {
					this._cache[path] = data;
				}
				return data;
			}
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
			return { errorMessage: e };
		}
	}
}
