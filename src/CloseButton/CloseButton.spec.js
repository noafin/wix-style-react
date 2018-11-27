import React from 'react';
import CloseButton from '.';
import { shallow } from 'enzyme';
import Close from '../new-icons/system/Close';
import CloseLarge from '../new-icons/system/CloseLarge';

describe('CloseButton', () => {
  it('should have correct displayName', async () => {
    expect(CloseButton.displayName).toEqual('CloseButton');
  });

  describe('Icon size', () => {
    it('should have size 24px', () => {
      const wrapper = shallow(<CloseButton size="small" />);
      expect(wrapper.props().children).toEqual(<Close />);
    });

    it('given size small should have size 18px', () => {
      const wrapper = shallow(<CloseButton />);
      expect(wrapper.props().children).toEqual(<CloseLarge />);
    });
  });
});
