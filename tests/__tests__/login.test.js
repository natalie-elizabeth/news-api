import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Login from '../../src/app/components/Login';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';
import GoogleLogin from 'react-google-login';

const success = (response) => {
  console.log(response);
};

const error = (response) => {
  console.error(response);
};

const loading = () => {
  console.log('loading');
};

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
  it('should render the Login in the divs', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.containsMatchingElement(
      <div className="Loginbutton">
        <GoogleLogin
          clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
          onSuccess={success}
          onFailure={error}
          onRequest={loading}
          buttonText="Login using google+"
          redirectUri="https://localhost:3000"
        />
      </div>
    ));
  });
  it('tests for response in console', () => {
    jest.spyOn(console, 'log');
    expect(console.log).toHaveBeenCalledWith('success');
  });
});

