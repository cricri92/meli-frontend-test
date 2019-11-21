import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames/bind';

import {DEFAULT_CURRENCY_LOCALE} from "./constants";

import './styles.scss';

function ProductPrice({ price, classNames, priceAddons }) {
  const formattedAmount = price.amount.toLocaleString(price.currency_detail ? price.currency_detail.currencyLocale : DEFAULT_CURRENCY_LOCALE);

  return (
    <span className={
      classnames({
        "product-price": true,
        [classNames]: classNames !== undefined
      })}>
      {price.symbol}{formattedAmount}, <small>{price.decimals > 9 ? price.decimals : `0${price.decimals}`}</small>
      <div className="product-price__add-ons">
        {priceAddons}
      </div>
    </span>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.shape({
    amount: PropTypes.number,
    symbol: PropTypes.string,
    decimals: PropTypes.number,
    currencyLocale: PropTypes.string
  }).isRequired,
  classNames: PropTypes.string
};

export default ProductPrice;