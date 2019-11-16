import React, { Component } from 'react';

import AppInnerPage from "components/AppInnerPage";

import 'pages/products/SearchResults/styles.scss';


class SearchResults extends Component {
  render() {
    return (
    <AppInnerPage classNames="search-results">
    </AppInnerPage>
  );
  }
}

SearchResults.propTypes = {
  //
};

export default SearchResults;