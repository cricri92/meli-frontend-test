import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import ProductPrice from "pages/products/components/ProductPrice";
import AppIcon from "components/AppIcon";
import {SHIPPING_ICON} from "components/AppIcon/constants";
import AppThumbnail from "components/AppThumbnail";
import AppSecondaryTitle from "components/AppSecondaryTitle";

function ProductListItem({ product }) {
  return (
    <li className="product-list-item">
      <AppThumbnail
        thumbnail={product.thumbnail}
        title={product.title}
        classNames="product-list-item__thumbnail" />
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
              <AppSecondaryTitle title={product.title} />
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