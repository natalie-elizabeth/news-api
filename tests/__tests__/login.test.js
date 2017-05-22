import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Login from '../../src/app/components/Login';

describe('Login', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  it('render 1 <Login/> component', () => {
    const wrapper = shallow(<Login />);
    console.log(wrapper.props());
    expect(wrapper).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const wrapper = shallow(<Login name="Login" />);
    console.log(wrapper.instance().props);
    expect(wrapper.instance().props.name).toBe('Login');
  });

});
