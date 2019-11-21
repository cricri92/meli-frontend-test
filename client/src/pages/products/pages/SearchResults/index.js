import React, {useState, useEffect}  from 'react';
import queryString from 'query-string';
import {withRouter, useLocation} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppMainTitle from "components/AppMainTitle";

import ProductsList from "pages/products/components/ProductsList";

import SearchService from "services/Search";

import './styles.scss';

function SearchResults() {
  const [productsList, setProductsList] = useState(null);
  const [categories, setCategories] = useState(null);
  const [querySearch, setQuerySearch] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = queryString.parse(location.search);
    const { search } = searchQuery;

    if (search !== querySearch) {
      setQuerySearch(search);

      SearchService.getResults(search)
        .then(({ items, categories }) => {
          setProductsList(items);
          setCategories(categories);
        })
    }
  }, [location.search, querySearch]);

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

SearchResults.propTypes = {
  //
};

export default withRouter(SearchResults);