import React from 'react';
import { Popover as CorePopover } from 'wix-ui-core/Popover';
import { buildChildrenObject } from 'wix-ui-core/dist/src/utils';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';

import style from './Popover.st.css';

// The core's Popover compound components (Popover.Element, Popover.Content)
// simply render their children. Since WSR uses React 15, their children must
// be a valid React 15 component (and not a string, for example). As a result,
// we're wrapping their children with a <div>.
/* eslint-disable react/prop-types */
const buildCorePopoverChild = name => {
  const Comp = ({ children, ...rest }) =>
    React.createElement(
      CorePopover[name],
      rest,
      typeof children === 'string' ? <div>{children}</div> : children,
    );

  Comp.displayName = `Popover.${name}`;
  Comp.propTypes = { children: PropTypes.node };

  return Comp;
};
/* eslint-enable react/prop-types */

class Popover extends WixComponent {
  static displayName = 'Popover';

  static Element = buildCorePopoverChild('Element');
  static Content = buildCorePopoverChild('Content');

  static propTypes = {
    ...CorePopover.propTypes,
    dataHook: PropTypes.string,

    /** Callback to be called when the user perform a click outside of the component */
    onClickOutside: PropTypes.func,
    /** The theme of the popover */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Whether to apply thr bouncing animation */
    bounce: PropTypes.bool,
    /** Text alignment og the popover's text */
    textAlign: PropTypes.string,

    children: PropTypes.arrayOf(children => {
      const childrenObj = buildChildrenObject(children);

      if (!childrenObj.Element) {
        return new Error(
          'Invalid children provided, <Popover.Element/> must be provided',
        );
      }

      if (!childrenObj.Content) {
        return new Error(
          'Invalid children provided, <Popover.Content/> must be provided',
        );
      }

      return Object.entries(childrenObj).reduce((err, [key, val]) => {
        if (!err && (key !== 'Element' || key !== 'Content')) {
          return new Error(
            `Invalid children provided, unknown child <${val.displayName ||
              key}/> supplied`,
          );
        }

        return err;
      }, false);
    }),
  };

  static defaultProps = {
    dataHook: '',
    theme: 'light',
  };

  onClickOutside(e) {
    this.props.onClickOutside && this.props.onClickOutside(e);
  }

  render() {
    const { dataHook, theme, bounce, ...rest } = this.props;

    return (
      <div data-hook={dataHook}>
        <CorePopover
          {...rest}
          {...style(
            'root',
            {
              bounce,
              theme,
            },
            this.props,
          )}
        />
      </div>
    );
  }
}

export default Popover;
