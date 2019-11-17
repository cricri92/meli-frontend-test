import React from 'react';

import AppBrandLogo from "components/AppBrandLogo";
import SearchBar from "components/AppHeader/components/SearchBar";

import './styles.scss';

function AppHeader() {
  return (
    <nav className="app-header">
      <div className="app-header__content container">
          <AppBrandLogo classNames={'app-header-logo'} />
          <div className="app-header__search-bar">
            <SearchBar />
          </div>
      </div>
    </nav>
  );
}

AppHeader.propTypes = {
  //
};

export default AppHeader;