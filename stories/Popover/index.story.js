import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import { storySettings } from './storySettings';

import Popover from '../../src/Popover';

import ExampleDynamicContent from './examples/ExampleDynamicContent';
import ExampleDynamicContentRaw from '!raw-loader!./examples/ExampleDynamicContent';

import ExampleDropdownLayout from './examples/ExampleDropdownLayout';
import ExampleDropdownLayoutRaw from '!raw-loader!./examples/ExampleDropdownLayout';

const children = [
  {
    label: 'Content with padding',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">Content without padding</Popover.Content>,
    ],
  },
  {
    label: 'Content with padding',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">
        <div style={{ padding: '12px 24px' }}>Content with padding</div>
      </Popover.Content>,
    ],
  },
];

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: Popover,
  componentPath: '../../src/Popover/Popover.js',

  componentProps: (setProps, getProps) => ({
    dataHook: storySettings.dataHook,

    children: children[0].value,
    showArrow: true,
    timeout: 150,
    shown: false,
    placement: 'top',
    appendTo: 'viewport',

    onClick: () => setProps({ shown: !getProps().shown }),
  }),

  exampleProps: {
    children,

    appendTo: [
      { label: 'window', value: window },
      { label: 'scrollParent', value: 'scrollParent' },
      { label: 'viewport', value: 'viewport' },
      { label: 'parent', value: 'parent' },
      { label: 'null', value: null },
    ],

    placement: [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
  },

  examples: (
    <div>
      <CodeExample title="With dynamic content" code={ExampleDynamicContentRaw}>
        <ExampleDynamicContent />
      </CodeExample>

      <CodeExample title="With DropdownLayout" code={ExampleDropdownLayoutRaw}>
        <ExampleDropdownLayout />
      </CodeExample>
    </div>
  ),
};
