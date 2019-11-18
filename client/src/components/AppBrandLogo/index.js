import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import './styles.scss';

function AppBrandLogo({ classNames }) {
  const url = process.env.REACT_APP_BACKEND_URL;

  return (
    <Link to='/'>
      <img src={`${url}assets/img/Logo_ML@2x.png`}
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