import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ProductsList({ productsList }) {
  return (
    <ul className="products-list">
        {
          productsList.map(product =>
            <li>{JSON.stringify(product)}</li>
          )
        }
    </ul>
  );
}

ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired
};

export default ProductsList;