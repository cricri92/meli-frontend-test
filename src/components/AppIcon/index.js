import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function AppIcon({ iconType, description }) {
  return (
    <img src={iconType} alt={description} />
  );
}

AppIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default AppIcon;