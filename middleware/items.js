const CURRENCIES = require('../constants/currencies');
const CATEGORY_ID_NAME = 'category';

const {
	PRODUCT_CONDITIONS,
	ONE_SELLED_PRODUCT,
	MULTIPLE_SELLED_PRODUCTS
} = require('../constants/product_conditions');

function formatItemResult(result) {
		return {
				id: result.id,
				title: result.title,
				price: {
					currency: result.currency_id,
					amount: Math.floor(result.price),
					decimals: parseInt((result.price % 1).toFixed(2).substr(2)),
					currency_detail: CURRENCIES.LIST.find(currency => currency.iso === result.currency_id) || CURRENCIES.DEFAULT_CURRENCY_SYMBOL
				},
				picture: result.thumbnail,
				condition: PRODUCT_CONDITIONS[result.condition].displayName,
				sold_quantity: result.sold_quantity > 0 ? `${result.sold_quantity} ${result.sold_quantity === 1 ? PRODUCT_CONDITIONS[ONE_SELLED_PRODUCT].displayName : PRODUCT_CONDITIONS[MULTIPLE_SELLED_PRODUCTS].displayName}` : null,
				free_shipping: result.shipping.free_shipping,
				description: result.description ? result.description.plain_text : null,
				address: result.address,
			};
	}

const itemsMiddleware = {
	formatItemsResults(searchResults, chunkSize = 4) {
		const { results, filters } = searchResults;
		const categories = filters.find(items => items.id === CATEGORY_ID_NAME) || null;

		return {
			categories,
			items: results.map(result => formatItemResult(result)).splice(0, chunkSize)
		};
	},
	formatItemResult(result) {
		return formatItemResult(result);
	}
};

module.exports = itemsMiddleware;