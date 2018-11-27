import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings } from '../../stories/CloseButton/storySettings';

describe('CloseButton', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
  });

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(() => {
    return autoExampleDriver.remount();
  });

  describe(`'skin' prop`, () => {
    [' ', 'inverted', 'light', 'dark', 'transparent'].map(skin =>
      eyes.it(`should render with value ${skin}`, async () => {
        await autoExampleDriver.setProps({ skin });
      }),
    );
  });

  describe(`'size' prop`, () => {
    ['small', ' '].map(size =>
      eyes.it(`should render with ${size} icon`, async () => {
        await autoExampleDriver.setProps({ size });
      }),
    );
  });
});
