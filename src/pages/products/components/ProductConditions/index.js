import React from 'react';
import PropTypes from 'prop-types';
import PRODUCT_CONDITIONS, {MULTIPLE_SELLED_PRODUCTS, ONE_SELLED_PRODUCT} from "pages/products/ProductDetail/constants";

import './styles.scss';

function ProductConditions({ product }) {
  return (
    <>
      <span className="product-condition">
        {PRODUCT_CONDITIONS[product.condition].displayName}
      </span>
      {
        product.sold_quantity > 0 && (
          <span className="product-condition">
						{`${product.sold_quantity} ${product.sold_quantity === 1 ? PRODUCT_CONDITIONS[ONE_SELLED_PRODUCT].displayName : PRODUCT_CONDITIONS[MULTIPLE_SELLED_PRODUCTS].displayName}`}
          </span>
				)
      }
      </>
  );
}

ProductConditions.propTypes = {
  product: PropTypes.object
};

export default ProductConditions;