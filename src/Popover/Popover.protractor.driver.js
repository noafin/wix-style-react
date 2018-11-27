import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/dist/src/components/Popover/Popover.protractor.driver';

const popoverDriverFactory = component => {
  const driver = {
    exists: () => !!component,
  };

  return {
    ...corePopoverDriverFactory(component),
    ...driver,
  };
};

export default popoverDriverFactory;
