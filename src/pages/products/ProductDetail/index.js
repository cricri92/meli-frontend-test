import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppThumbnail from "components/AppThumbnail";
import AppMainTitle from "components/AppMainTitle";

import {PRODUCTS_LIST} from "pages/products/components/ProductsList/mockup";

import ProductConditions from "pages/products/components/ProductConditions";
import ProductPrice from "pages/products/components/ProductPrice";

import './styles.scss';

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

  render() {
    const {product} = this.state;

    console.log(product);

    return (
      product ?
        <AppInnerPage classNames="product-detail">
          <AppThumbnail title={product.title}
                        thumbnail={product.thumbnail}
                        classNames="product-detail__thumbnail"/>
           <div className="product-detail-info">
            <ProductConditions product={product}/>
            <div className="divider divider--min">
              <AppMainTitle title={product.title} />
            </div>
             <div className="divider divider--max">
               <ProductPrice currency={product.currency} price={product.price} classNames="product-detail-info__price" />
             </div>
           </div>
        </AppInnerPage>
      :
        null
    );
  }
}

export default withRouter(ProductDetail);