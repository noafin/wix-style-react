import eyes from 'eyes.it';

import { popoverTestkitFactory } from '../../testkit/protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings } from '../../stories/Popover/storySettings';

describe('Popover', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
  });
  const testStoryUrl = testName =>
    createTestStoryUrl({ ...storySettings, testName });

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = popoverTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      driver.element(),
      'Cannot find Popover component',
    );
    await scrollToElement(driver.element());
    return driver;
  };

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  eyes.it(`with DropdownLayout example`, async () => {
    const driver = await createDriver('story-popover-dropdown-layout');
    await driver.click();
  });

  describe('Test stories', () => {
    const checkTestStory = async testName => {
      await browser.get(testStoryUrl(testName));
      eyes.checkWindow(testName);
    };

    eyes.it('check auto positioning', async () => {
      await checkTestStory('Auto positioning');
    });

    eyes.it('check arrow adjusting', async () => {
      await checkTestStory('Arrow adjusting');
    });

    eyes.it('check arrow edge adjusting', async () => {
      await checkTestStory('Arrow edge adjusting');
    });
  });
});
