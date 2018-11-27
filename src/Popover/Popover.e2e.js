import eyes from 'eyes.it';

import {popoverTestkitFactory} from '../../testkit/protractor';
import {createStoryUrl, waitForVisibilityOf, scrollToElement} from 'wix-ui-test-utils/protractor';
import {storySettings} from '../../stories/Popover/storySettings';

describe('Popover', () => {
  const storyUrl = createStoryUrl({kind: storySettings.kind, story: storySettings.storyName});

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = popoverTestkitFactory({dataHook});

    await waitForVisibilityOf(driver.element(), 'Cannot find Popover component');
    await scrollToElement(driver.element());
    return driver;
  };

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  eyes.it(`with DropdownLayout example`, async () => {
    const driver = createDriver('story-popper-dropdown-layout');
    await driver.click();
  });
});
