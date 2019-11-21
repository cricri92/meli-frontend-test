import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import {PRIMARY_BUTTON, SECONDARY_BUTTON} from "components/AppButton/constants";

import './styles.scss';

function AppButton({ children, actionToExecute, buttonType, ...props }) {
  return (
    <button onClick={actionToExecute}
            className={classnames({
              'app-button': true,
              'app-button--primary': buttonType === PRIMARY_BUTTON,
              'app-button--secondary': buttonType === SECONDARY_BUTTON
            })} {...props}>
      {children}
    </button>
  );
}

AppButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  actionToExecute: PropTypes.func.isRequired,
  buttonType: PropTypes.oneOf([PRIMARY_BUTTON, SECONDARY_BUTTON]).isRequired
};

export default AppButton;