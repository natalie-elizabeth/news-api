import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Nav, { SideBar } from '../../src/app/components/Nav';

describe('Nav', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  /*it('div stuff', () => {
    const wrapper = shallow(
      <div className="sideBar">


      </div>);
expect(wrapper.containsAllMatchingElements([

]))*/

});




/*const wrapper = shallow(
  <div>
    <span className="foo">Hello</span>
    <div style={{ fontSize: 13 }}>Goodbye</div>
    <span>Again</span>
  </div>
);

expect(wrapper.containsAllMatchingElements([
  <span>Hello</span>,
  <div>Goodbye</div>,
])).to.equal(true);*/
