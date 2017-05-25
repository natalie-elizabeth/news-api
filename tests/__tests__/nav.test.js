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
  // tests if the componentWillMount takes up content
  it('calls `componentWillMount` before rendering', () => {
    const wrapper = jest.fn();
    Nav.prototype.componentWillMount = wrapper;
    mount(<Nav />);

    expect(wrapper).toBeCalled();
  });

  // the two ensure that sources and articles initial state is an empty array
  it('asserts that sources initial state is an empty array', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.state().sources).toEqual([]);
  });
  it('asserts that articles initial state is an empty array', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.state().articles).toEqual([]);
  });

  it('asserts that on setState sources state will have content', () => {
    const wrapper = shallow(<Nav />);
    wrapper.setState({ articles: [{ urlToImage: 'nat', title: 'nat', description: 'nat' }] });
    expect(wrapper.state().articles.length).toBeGreaterThan(0);
  });
});
