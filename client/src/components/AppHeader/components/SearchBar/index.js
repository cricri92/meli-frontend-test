import React, { useState } from 'react';
import { useHistory, useLocation, withRouter} from 'react-router-dom';
import queryString from 'query-string';

import {SECONDARY_BUTTON} from "components/AppButton/constants";
import {SEARCH_ICON} from "components/AppIcon/constants";

import AppButton from "components/AppButton";
import AppIcon from "components/AppIcon";

import './styles.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchBar() {
  const location = useLocation();
  const query = queryString.parse(location.search);

  let history = useHistory();
  const [searchValue, setSearchValue] = useState(query ? query.search : null);
  const searchActionCall = 'Nunca dejes de buscar';

  function handleInputChange({ target }) {
    setSearchValue(target.value)
  }

  const handleSearchButtonClick = () => {
    if (searchValue) {
      history.push(`items?search=${searchValue}`)
    } else {
      history.push('/')
    }
  };

  if (searchValue !== query.search) {
    handleSearchButtonClick()
  }

  function onKeyPressed(event) {
    if (event.key === 'Enter') {
      handleSearchButtonClick();
    }
  }

  return (
      <div className="search-bar">
        <input type="text"
               onChange={e => handleInputChange(e)}
               placeholder={searchActionCall}
                onKeyPress={onKeyPressed}/>
        <AppButton
          actionToExecute={handleSearchButtonClick}
          buttonType={SECONDARY_BUTTON}>
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