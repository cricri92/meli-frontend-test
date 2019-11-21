import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ProductConditions({ product }) {
  return (
    <div>
      <span className="product-condition">
        {product.condition}
      </span>
      {
        product.sold_quantity && (
          <span className="product-condition">
						{product.sold_quantity}
          </span>
				)
      }
    </div>
  );
}

ProductConditions.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductConditions;