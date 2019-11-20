import React, { useState } from 'react';
import {useHistory, useParams, withRouter} from 'react-router-dom';

import {SECONDARY_BUTTON} from "components/AppButton/constants";
import {SEARCH_ICON} from "components/AppIcon/constants";

import AppButton from "components/AppButton";
import AppIcon from "components/AppIcon";

import './styles.scss';

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState(null);
  const history = useHistory();
  const params = useParams();

  const searchActionCall = 'Nunca dejes de buscar';

  function setParams({ query = ""}) {
    const searchParams = new URLSearchParams();
    searchParams.set("search", query);
    return searchParams.toString();
  }

  function handleSearchButtonClick() {
    const url = setParams({ query: searchValue || '' });

    history.push(`/items?${url}`);
  }

  return (
    <div className="search-bar">
      <input type="text"
             onChange={({target}) => setSearchValue(target.value)}
             placeholder={searchActionCall}
             value={searchValue} />
      <AppButton actionToExecute={e => handleSearchButtonClick()} type={SECONDARY_BUTTON}>
        <span>
          <AppIcon description={searchActionCall} iconType={SEARCH_ICON}/>
        </span>
      </AppButton>
     </div>
  );
}

SearchBar.propTypes = {
  //
};

export default withRouter(SearchBar);