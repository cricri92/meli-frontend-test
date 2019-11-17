import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames/bind';

import {CURRENCIES, DEFAULT_CURRENCY_SYMBOL} from "pages/products/components/ProductPrice/constants";

import './styles.scss';

function ProductPrice({ price, currency, classNames, priceAddons }) {
  const currencyDetail = CURRENCIES.find(cur => cur.iso === currency) || DEFAULT_CURRENCY_SYMBOL;

  return (
    <span className={
      classnames({
        "product-price": true,
        [classNames]: classNames !== undefined
      })}>
      {currencyDetail.symbol} {price.toLocaleString(currencyDetail.currencyLocale)}
      <div className="product-price__add-ons">
        {priceAddons}
      </div>
    </span>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  classNames: PropTypes.string
};

export default ProductPrice;