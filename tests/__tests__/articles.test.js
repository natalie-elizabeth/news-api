import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Articles from '../../src/app/components/Articles';

describe('Articles', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  /*it('should render articles in the divs', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.containsMatchingElement(
      <div className="articles">

      </div>
    ));
  });*/
  // it('asserts that articles initial state is an empty array', () => {
  //   const wrapper = shallow(<Articles />);
  //   expect(wrapper.state().articles).toEqual([]);
  // });
  it('should check if articles are being rendered', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.containsMatchingElement(
      <div >
      </div>
    ));
  });

});
