import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/dist/src/components/Popover/Popover.driver';

const popoverDriverFactory = ({ element, eventTrigger }) => {
  const driver = {
    exists: () => !!element,
  };

  return {
    ...corePopoverDriverFactory({ element, eventTrigger }),
    ...driver,
  };
};

export default popoverDriverFactory;
