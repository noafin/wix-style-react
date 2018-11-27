import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

import Popover from './Popover';
import popoverDriverFactory from './Popover.driver';

describe.skip('Popover', () => {
  const createDriver = createDriverFactory(popoverDriverFactory);

  it('should render', () => {
    const driver = createDriver(
      <Popover>
        <Popover.Element>
          <div>I am the trigger!</div>
        </Popover.Element>

        <Popover.Content>
          <div>I am the content!</div>
        </Popover.Content>
      </Popover>,
    );

    expect(driver.exists()).toBeTruthy();
  });

  it('should allow string as children for compound components', () => {
    const driver = createDriver(
      <Popover>
        <Popover.Element>I am the trigger!</Popover.Element>
        <Popover.Content>I am the content!</Popover.Content>
      </Popover>,
    );

    expect(driver.exists()).toBeTruthy();
  });

  it('should support the onClickOutside prop', () => {
    const driver = createDriver(
      <Popover>
        <Popover.Element>I am the trigger!</Popover.Element>
        <Popover.Content>I am the content!</Popover.Content>
      </Popover>,
    );

    expect(driver.exists()).toBeTruthy();
  });

  it('should throw a PropType error when not provided with Popover.Element', () => {
    const consoleErrorSpy = jest
      .spyOn(global.console, 'error')
      .mockImplementation(jest.fn());

    createDriver(
      <Popover>
        <div>wut wut?</div>
      </Popover>,
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Warning: Failed prop type: Invalid children provided, <Popover.Element/> must be provided\n    in Popover',
    );
  });
});
