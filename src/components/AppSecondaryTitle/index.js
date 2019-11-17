import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function AppSecondaryTitle({ title }) {
  return (
    <h2 className="app-secondary-title">
        {title}
    </h2>
  );
}

AppSecondaryTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppSecondaryTitle;