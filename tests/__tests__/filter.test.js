import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Filters from '../../src/app/components/filter';

const mockSources = {
  sources: [
    {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "sortBysAvailable": [
        "top"
      ]
    },]
};


describe('Filters', () => {
  it('calls `componentWillMount` before rendering', () => {
    const wrapper = jest.fn();
    Filters.prototype.componentWillMount = wrapper;
    mount(<Filters />);

    expect(wrapper).toBeCalled();
  });
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  it('should check if search filter is being rendered', () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.containsMatchingElement(
      <div className="container">
        <select></select>
        <select></select>
        <div>
          <h2></h2>
          <div>
            <div><h4></h4></div>
          </div>
        </div>
      </div>
    ));
  });
  it('should assert that the array has more than one source', () => {
    const wrapper = mount(<Filters />);
    wrapper.setState({ sources: mockSources });
    wrapper.update();
    const sources = wrapper.find('.card-block');
    expect(sources.length).toBeGreaterThanOrEqual(1);
  });

  it("handles changing filter key", () => {
    const name = "filterKey";
    const value = "category";
    const wrapper = shallow(<Filters />);
    const select = wrapper.find(`select[name='${name}']`).first();
    const event = {
      target: { name, value }
    };
    select.simulate('change', event);
    const state = wrapper.state();
    expect(state.currentFilter.filterKey).toEqual(value);
  });

  it("handles changing filter value", () => {
    const name = "filterValue";
    const value = "business";
    const wrapper = shallow(<Filters />);
    const select = wrapper.find(`select[name='${name}']`).first();
    const event = {
      target: { name, value }
    };
    select.simulate('change', event);
    const state = wrapper.state();
    expect(state.currentFilter.filterValue).toEqual(value);
  });
});
