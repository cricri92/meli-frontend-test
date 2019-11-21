import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, withRouter} from 'react-router-dom';
import queryString from 'query-string';

import {SECONDARY_BUTTON} from "components/AppButton/constants";
import {SEARCH_ICON} from "components/AppIcon/constants";

import AppButton from "components/AppButton";
import AppIcon from "components/AppIcon";

import './styles.scss';

function SearchBar() {
  const location = useLocation();

  let history = useHistory();
  const query = queryString.parse(location.search);
  const [searchValue, setSearchValue] = useState(query.search);

  const searchActionCall = 'Nunca dejes de buscar';

  useEffect(() => {
    const query = queryString.parse(location.search);

    if (query.search && searchValue !== query.search) {
      setSearchValue(searchValue);
    }
  }, [location.search, searchValue]);

  function handleInputChange({ target }) {
    setSearchValue(target.value)
  }

  function handleSearchButtonClick() {
    if (searchValue) {
      history.push(`items?search=${searchValue}`)
    } else {
      history.push('/')
    }
  }

  function onKeyPressed(event) {
    if (event.key === 'Enter') {
      handleSearchButtonClick();
    }
  }

  return (
      <div className="search-bar">
        <input type="text" value={searchValue}
               onChange={e => handleInputChange(e)}
               placeholder={searchActionCall}
               onKeyPress={onKeyPressed} />
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