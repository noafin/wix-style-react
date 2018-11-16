import {
  importExample,
  description,
  code
} from 'wix-storybook-utils/dist/src/Sections/builders';

import Notification from 'wix-style-react/Notification';

const sourceForThemes = theme => `
<Notification theme="${theme}" show>
  <Notification.TextLabel>${theme}</Notification.TextLabel>
  <Notification.CloseButton/>
</Notification>
`;

const wrapWithDiv = string =>
  `<div>
  ${string}
</div>`;

export default {
  category: 'Notification',
  storyName: 'Notification new',
  componentPath: '../../src/Notification',

  sections: [
    importExample({
      source: 'import Notification from \'wix-style-react/Notification\';'
    }),

    description({
      text:
        'A sticky toast bar that appears on top of the screen notifying about system changes.'
    }),

    code({
      source: wrapWithDiv(
        ['standard', 'error', 'success', 'warning', 'premium'].reduce(
          (a, theme) => a.concat(sourceForThemes(theme).trim() + '\n'),
          ''
        )
      ),
      components: {Notification}
    })
  ]
};
