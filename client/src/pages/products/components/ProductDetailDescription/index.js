import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ProductDetailDescription({ description  }) {
		return (
			<div className="product-detail-description">
				<h2 className="product-detail-description__title">
					Descripción del producto
				</h2>
				<p className="product-detail-description__text">
					{description}
				</p>
			</div>
		);
}

ProductDetailDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default ProductDetailDescription;