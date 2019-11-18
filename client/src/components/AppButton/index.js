import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import {PRIMARY_BUTTON, SECONDARY_BUTTON} from "components/AppButton/constants";

import './styles.scss';

function AppButton({ children, actionToExecute, type }) {
  return (
    <button onClick={actionToExecute}
            className={classnames({
              'app-button': true,
              'app-button--primary': type === PRIMARY_BUTTON,
              'app-button--secondary': type === SECONDARY_BUTTON
            })}>
      {children}
    </button>
  );
}

AppButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  actionToExecute: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default AppButton;