import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {SHIPPING_ICON} from "components/AppIcon/constants";

import AppIcon from "components/AppIcon";
import AppThumbnail from "components/AppThumbnail";
import AppSecondaryTitle from "components/AppSecondaryTitle";
import ProductPrice from "pages/products/components/ProductPrice";

import './styles.scss';

function ProductListItem({ product }) {
  const productLink = `/items/${product.id}`;

  return (
    <li className="product-list-item">
      <Link to={productLink} className="product-list-item-link">
        <AppThumbnail
          thumbnail={product.thumbnail}
          title={product.title}
          classNames="product-list-item__thumbnail" />
      </Link>
        <div className="product-list-item-content">
          <div className="product-info">
            <div className="product-info__item">
              <ProductPrice classNames="product-price--list"
                price={product.price}
                currency={product.currency_id}
                priceAddons={
                  product.shipping.free_shipping &&
                    <AppIcon iconType={SHIPPING_ICON} description="Free shipping"/>
                } />
            </div>
            <div className="product-info__item">
              <Link to={productLink} className="product-list-item-link">
                <AppSecondaryTitle title={product.title} />
              </Link>
            </div>
          </div>
          <span className="product-location">
            {product.address.state_name}
          </span>
        </div>
    </li>
  );
}

ProductListItem.propTypes = {
  // TODO: Ajustar shape de producto aca
  product: PropTypes.object.isRequired
};

export default ProductListItem;