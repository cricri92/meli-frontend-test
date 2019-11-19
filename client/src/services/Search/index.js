import ApiService from "services";
import SearchServiceUtils from "./utils";

const SearchService = {
	getResults(search) {
		return ApiService.get(SearchServiceUtils.formatSearchUrl(search));
	}
};

export default SearchService;
