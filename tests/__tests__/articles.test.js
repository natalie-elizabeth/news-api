import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Articles from '../../src/app/components/Articles';

describe('Articles', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
});
