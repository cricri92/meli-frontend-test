import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import './styles.scss';

function AppThumbnail({ thumbnail, title, classNames }) {
  return (
    <img src={thumbnail}
           alt={title}
           className={classnames({
             "app-thumbnail": true,
             [classNames]: classNames !== undefined
           })} />
  );
}

AppThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classNames: PropTypes.string
};

export default AppThumbnail;