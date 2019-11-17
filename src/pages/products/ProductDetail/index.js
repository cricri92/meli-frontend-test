import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppThumbnail from "components/AppThumbnail";

import {PRODUCTS_LIST} from "pages/products/components/ProductsList/mockup";

import 'pages/products/ProductDetail/styles.scss';
import PRODUCT_CONDITIONS, {MULTIPLE_SELLED_PRODUCTS, ONE_SELLED_PRODUCT} from "pages/products/components/ProductConditions/constants";
import ProductConditions from "pages/products/components/ProductConditions";

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
           </div>
        </AppInnerPage>
      :
        null
    );
  }
}

export default withRouter(ProductDetail);