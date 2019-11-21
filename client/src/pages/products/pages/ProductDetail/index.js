import React, { useEffect, useState } from 'react';
import {withRouter, useParams, useHistory} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppThumbnail from "components/AppThumbnail";
import AppMainTitle from "components/AppMainTitle";
import AppButton from "components/AppButton";

import {PRIMARY_BUTTON, SECONDARY_BUTTON} from "components/AppButton/constants";
import {PRODUCT_DETAIL_ADD_TO_CART_BUTTON_TEXT, PRODUCT_DETAIL_LOADING_TEXT} from "./constants";

import ProductConditions from "pages/products/components/ProductConditions";
import ProductPrice from "pages/products/components/ProductPrice";

import ProductDetailDescription from "pages/products/components/ProductDetailDescription";

import ItemsService from "services/Items";

import './styles.scss';

function ProductDetail() {
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      ItemsService.getItem(id)
      .then(product => {
        setProduct(product)
      }).catch(error => {
        console.log(error);
      });
    }
  });

  function handleBuyProductClick() {
    console.log('buying product');
  }

  function goBack() {
    history.goBack();
  }

  return (
        <AppInnerPage classNames="product-detail"
          headerComponent={
            <div className="product-detail-header">
              <AppButton buttonType={SECONDARY_BUTTON}
                         actionToExecute={goBack}>
                {`< Volver al listado`}
              </AppButton>
            </div>
          }>
          {
            !product && <AppMainTitle title={PRODUCT_DETAIL_LOADING_TEXT} />
          }
          {
            product && product.error && (
              <AppMainTitle title={product.message} />
            )
          }
          {
            product && product.id && (
              <>
                <div className="product-detail-content">
                  <div className="product-detail-picture">
                    <AppThumbnail title={product.title}
                                thumbnail={product.picture}
                                classNames="product-detail-content__thumbnail"/>
                  </div>
                   <div className="product-detail-info">
                    <ProductConditions product={product}/>
                    <div className="divider divider--min">
                      <AppMainTitle title={product.title} />
                    </div>
                     <div className="divider divider--max">
                       <ProductPrice price={product.price}
                                     classNames="product-detail-info__price" />
                     </div>
                     <div className="divider divider--max">
                       <AppButton buttonType={PRIMARY_BUTTON}
                                  actionToExecute={handleBuyProductClick}>
                         {PRODUCT_DETAIL_ADD_TO_CART_BUTTON_TEXT}
                       </AppButton>
                     </div>
                   </div>
                </div>
                <div className="divider divider--max">
                  <ProductDetailDescription description={product.description} />
                </div>
              </>
            )
          }
        </AppInnerPage>
    );
}

export default withRouter(ProductDetail);