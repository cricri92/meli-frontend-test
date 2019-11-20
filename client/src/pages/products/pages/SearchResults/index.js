import React, { Component } from 'react';
import queryString from 'query-string';
import {withRouter} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppMainTitle from "components/AppMainTitle";

import ProductsList from "pages/products/components/ProductsList";

import SearchService from "services/Search";

import './styles.scss';

class SearchResults extends Component {
  state = {
    productsList: null
  };

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    console.log(query);

    const { search } = query;
    const { items, categories } = await SearchService.getResults(search);

    this.setState({
      productsList: items,
      categories
    })
  }

  render() {
    const { productsList } = this.state;

    // TODO: manejar paginas de no existencia de recursos
    return (
      <AppInnerPage classNames="search-results">
        {
          productsList &&
            <ProductsList productsList={productsList} />
        }
        {
          !productsList &&
            <AppMainTitle title="Cargando resultados..." />
        }
      </AppInnerPage>
  );
  }
}

SearchResults.propTypes = {
  //
};

export default withRouter(SearchResults);