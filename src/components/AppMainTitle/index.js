import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function AppMainTitle({ title }) {
  return (
    <h1 className="app-main-title">
			{title}
		</h1>
  );
}

AppMainTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppMainTitle;