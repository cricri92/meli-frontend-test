import React from 'react';
import PropTypes from 'prop-types';

import ProductListItem from "pages/products/components/ProductListItem";

import './styles.scss';

function ProductsList({ productsList }) {
  return (
    <ul className="products-list">
        {
          productsList.map(product =>
            <ProductListItem product={product} key={product.id} />
          )
        }
    </ul>
  );
}

ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired
};

export default ProductsList;