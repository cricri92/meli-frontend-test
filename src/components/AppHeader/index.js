import React from 'react';

import AppBrandLogo from "components/AppBrandLogo";
import './styles.scss';

function AppHeader() {
  return (
    <nav className="app-header">
      <div className="app-header__content container">
          <AppBrandLogo classNames={'app-header-logo'} />
      </div>
    </nav>
  );
}

AppHeader.propTypes = {
  //
};

export default AppHeader;