import React from 'react';
import CloseButton from '.';
import { shallow } from 'enzyme';
import Close from '../new-icons/system/Close';
import CloseLarge from '../new-icons/system/CloseLarge';

describe('CloseButton', () => {
  it('should have correct displayName', async () => {
    expect(CloseButton.displayName).toEqual('CloseButton');
  });

  describe('Icon', () => {
    it('when given small or none should have size <Close/>', () => {
      const wrapper = shallow(<CloseButton size="small" />);
      expect(wrapper.props().children).toEqual(<Close />);
    });

    it('when given medium should have size <CloseLarge />', () => {
      const wrapper = shallow(<CloseButton size="medium" />);
      expect(wrapper.props().children).toEqual(<CloseLarge />);
    });
  });
});
