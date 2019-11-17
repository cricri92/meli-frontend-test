import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppThumbnail from "components/AppThumbnail";
import AppMainTitle from "components/AppMainTitle";
import AppButton from "components/AppButton";

import {PRODUCTS_LIST} from "pages/products/components/ProductsList/mockup";
import {PRIMARY_BUTTON} from "components/AppButton/constants";

import ProductConditions from "pages/products/components/ProductConditions";
import ProductPrice from "pages/products/components/ProductPrice";

import './styles.scss';
import ProductDetailDescription from "pages/products/components/ProductDetailDescription";

class ProductDetail extends Component {
  state = {
    product: null
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({
      product: PRODUCTS_LIST.find(product => product.id === id)
    });
  }

  handleBuyProductClick() {
    console.log('buying product');
  }

  render() {
    const {product} = this.state;

    return (
      product ?
        <AppInnerPage classNames="product-detail">
          <div className="product-detail-content">
            <AppThumbnail title={product.title}
                          thumbnail={product.thumbnail}
                          classNames="product-detail-content__thumbnail"/>
             <div className="product-detail-info">
              <ProductConditions product={product}/>
              <div className="divider divider--min">
                <AppMainTitle title={product.title} />
              </div>
               <div className="divider divider--max">
                 <ProductPrice currency={product.currency_id}
                               price={product.price}
                               classNames="product-detail-info__price" />
               </div>
               <div className="divider divider--max">
                 <AppButton type={PRIMARY_BUTTON}
                            actionToExecute={this.handleBuyProductClick}>
                   Comprar
                 </AppButton>
               </div>
             </div>
          </div>
          <div className="divider divider--max">
            <ProductDetailDescription product={product} />
          </div>
        </AppInnerPage>
      :
        null
    );
  }
}

export default withRouter(ProductDetail);