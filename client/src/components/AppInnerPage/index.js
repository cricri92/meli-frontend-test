import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import AppBreadcrumb from "components/AppBreadcrumb";

import './styles.scss';

function AppInnerPage({ classNames, children }) {
  return (
    <div className="app-inner-page container">
        <AppBreadcrumb />
        <div className={classnames({
          "app-inner-page__content container": true,
          [classNames]: classNames !== undefined
      } )}>
          {children}
        </div>
    </div>
  );
}

AppInnerPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  classNames: PropTypes.string
};

export default AppInnerPage;