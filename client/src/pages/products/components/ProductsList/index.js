import React from 'react';
import PropTypes from 'prop-types';

import AppMainTitle from "components/AppMainTitle";

import ProductListItem from "pages/products/components/ProductListItem";

import './styles.scss';

function ProductsList({ productsList }) {
  return (
    productsList.length > 0 ?
      <ul className="products-list">
          {
            productsList.map(product =>
              <ProductListItem product={product} key={product.id} />
            )
          }
      </ul>
    :
      <AppMainTitle title='No existen resultados disponibles para esta búsqueda' />
  );
}

ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired
};

export default ProductsList;