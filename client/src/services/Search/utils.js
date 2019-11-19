export const SEARCH_RESOURCE = 'items';
export const SEARCH_URL = `${process.env.REACT_APP_BACKEND_URL}${SEARCH_RESOURCE}`;

const SearchServiceUtils = {
	formatSearchUrl(search) {
		return `${SEARCH_URL}?q=${search}`;
	},
};

export default SearchServiceUtils;