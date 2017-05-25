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
  it('should check if Search select is being rendered', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.containsMatchingElement(
      <div className="col-md-2" id="search">
      </div>
    ));
  });
  it('should display sources on search', () => {
    let mockSearch = jest.fn();
    const wrapper = mount(<Search showSources={mockSearch} />);
  });
});



