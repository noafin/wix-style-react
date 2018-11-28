import React, { Component } from 'react';
import { ButtonNext } from 'wix-ui-core/button-next';
import cx from 'classnames';

import { string, oneOf, bool } from 'prop-types';
import Close from '../new-icons/system/Close';
import CloseLarge from '../new-icons/system/CloseLarge';

import { closeButton } from 'wix-ui-core/themes/backoffice';

class CloseButton extends Component {
  static displayName = 'CloseButton';

  static propTypes = {
    /** additional css classes */
    className: string,
    /** skins of closebutton */
    skin: oneOf(['standard', 'inverted', 'light', 'dark', 'transparent']),
    /** size of closebutton */
    size: oneOf(['small', 'medium']),
    /** applies disabled styles */
    disabled: bool,
    /** string based data hook for testing */
    dataHook: string,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'small',
    disabled: false,
  };

  render() {
    const { skin, size, className, dataHook, ...rest } = this.props;

    const classNames = cx(className, closeButton(skin, size));

    return (
      <ButtonNext {...rest} data-hook={dataHook} className={classNames}>
        {size === 'small' ? <Close /> : <CloseLarge />}
      </ButtonNext>
    );
  }
}

export default CloseButton;
