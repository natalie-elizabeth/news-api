import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Search from '../../src/app/components/Search';

describe('Search', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
});
