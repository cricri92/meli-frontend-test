import React, { useState } from 'react';

import {SECONDARY_BUTTON} from "components/AppButton/constants";
import {SEARCH_ICON} from "components/AppIcon/constants";

import AppButton from "components/AppButton";
import AppIcon from "components/AppIcon";

import './styles.scss';

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState(null);
  const searchActionCall = 'Nunca dejes de buscar';

  const handleSearchButtonClick = () => {
    console.log(searchValue);
  };

  return (
    <div className="search-bar">
      <input type="text"
             onChange={({target}) => setSearchValue(target.value)}
             placeholder={searchActionCall} />
      <AppButton actionToExecute={handleSearchButtonClick} type={SECONDARY_BUTTON}>
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

export default SearchBar;