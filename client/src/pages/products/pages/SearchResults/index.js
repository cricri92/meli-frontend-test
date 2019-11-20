import React, {useState}  from 'react';
import queryString from 'query-string';
import {withRouter, useLocation, Redirect} from "react-router-dom";

import AppInnerPage from "components/AppInnerPage";
import AppMainTitle from "components/AppMainTitle";

import ProductsList from "pages/products/components/ProductsList";

import SearchService from "services/Search";

import './styles.scss';

function SearchResults() {
  const [productsList, setProductsList] = useState(null);
  const [categories, setCategories] = useState(null);

  const location = useLocation();

  const query = queryString.parse(location.search);
  const { search } = query;

  const [querySearch, setQuerySearch] = useState(search);

  const setProductsListItem = async () => {
      const query = queryString.parse(location.search);
      const { search } = query;

      if (search !== querySearch) {
        setQuerySearch(search);
        const { items, categories } = await SearchService.getResults(search);

        setProductsList(items);
        setCategories(categories);
      }
  };

  if (search) {
    setProductsListItem()
  } else {
    return <Redirect to={'/'} />
  }

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