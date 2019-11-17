import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import brandLogo2x from 'assets/img/Logo_ML@2x.png';

import './styles.scss';

function AppBrandLogo({ classNames }) {
  return (
    <Link to='/'>
      <img src={brandLogo2x}
           alt="Mercado Libre, todo en un solo lugar"
           className={
             classnames({
               'app-brand-logo': true,
               [classNames]: classNames !== undefined
             })} />
    </Link>
  );
}

AppBrandLogo.propTypes = {
  classNames: PropTypes.string
};

export default AppBrandLogo;