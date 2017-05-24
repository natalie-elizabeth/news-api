import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Search from '../../src/app/components/Search';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';

describe('Search', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  it('should have a search button', () => {
    const wrapper = shallow(<Search />);
    const tree = shallowToJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
  //   it ('should display text in the button', () => {
  //     const wrapper = shallow(<)
  // const text = 'Search';
});



//   // it('should display search button', () => {
//   //     const renderedComponent = shallow(<searchbox />);
//   //     expect(renderedComponent.find("search").node).toBeDefined();
//   // });

//   it('should display search text in the button', () => {
//     const text = 'Search';
//     const renderedComponent = shallow(<div>{'Search'}</div>);
//     expect(renderedComponent.contains(text)).toBe(true);
//   });

//   it("trigger onSearch correctly", () => {
//     const handleSearch = jest.fn();
//   });
// });
