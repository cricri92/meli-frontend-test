import ApiService from "services";

const ITEMS_RESOURCE_URL = `${process.env.REACT_APP_BACKEND_URL}items`;

const ItemsService = {
	getItem(itemId) {
		return ApiService.get(`${ITEMS_RESOURCE_URL}/${itemId}`);
	}
};

export default ItemsService;