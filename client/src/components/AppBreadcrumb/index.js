import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function AppBreadcrumb({ categories }) {
    return (
      <ul className="app-breadcrumb">
        {
          categories && categories.map(category => (
           <li key={category.category_id} className="app-breadcrumb__item">
             {category.category_name}
           </li>
          ))
        }
      </ul>
    );
}

AppBreadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    category_id: PropTypes.string,
    category_name: PropTypes.string
  })).isRequired
};

export default AppBreadcrumb;