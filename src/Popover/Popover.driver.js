import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/drivers/vanilla';

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
