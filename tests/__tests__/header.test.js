import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Header from '../../src/app/components/header';

describe('Header', () => {
  it('should display an image', () => {
    const wrapper = shallow(<img />);
    expect(wrapper.find('img').node).toBeDefined();
  });
  it('should render an image', () => {
    const wrapper_ = shallow(<img src="./src/images/title.jpg" />);
    expect(wrapper_).toMatchSnapshot();
  });
  it('should display homepage image', () => {
    const wrapper = shallow(<img />);
    expect(wrapper.containsMatchingElement(<img src='./src/images/title.jpg' style={{ width: '1140px', height: '200px' }} />));
  });
  it('should render image in the divs', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(
      <div className="headers">
        <img className='main-logo' src="./src/images/titlelogo.jpg" />
      </div>
    ));
  });

});




