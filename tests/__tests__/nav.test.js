import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Nav, { SideBar } from '../../src/app/components/Nav';

describe('Nav', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  it('should check if sidebar is being rendered', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.containsMatchingElement(
      <div className="sideBar">
        <div className='main'>
          <div className='title'>
          </div>
          <div className='explain col-lg-3' style={{ fontWeight: "bold" }}></div>
          <div className='col-lg-6'> </div>
          <div className='col-lg-3'></div>
        </div>
      </div>
    ));
  });
  it('should display Articles', () => {
    let mockDisplay = jest.fn();
    const wrapper = mount(<Nav displayArticles={mockDisplay} />);
  });
});
