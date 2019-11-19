import React, { Component } from 'react';

import AppInnerPage from "components/AppInnerPage";

import ProductsList from "pages/products/components/ProductsList";
import { PRODUCTS_LIST } from "pages/products/components/ProductsList/mockup";

import './styles.scss';

class SearchResults extends Component {
  state = {
    productsList: []
  };

  componentDidMount() {
    this.setState({
      productsList: PRODUCTS_LIST
    })
  }

  render() {
    const { productsList } = this.state;

    return (
    <AppInnerPage classNames="search-results">
      <ProductsList productsList={productsList} />
    </AppInnerPage>
  );
  }
}

SearchResults.propTypes = {
  //
};

export default SearchResults;