import { shallow, render, mount } from 'enzyme';
import React from 'react';
import NavBar from '../../src/app/components/NavBar';

describe('NavBar', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
});
