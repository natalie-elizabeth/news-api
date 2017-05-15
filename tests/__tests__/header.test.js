import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Header from '../../src/components/header';

describe('Header', () => {
    it('should render a h1 element', () => {
        const wrapper = shallow(<h1>Nate News </h1>);
        // console.log(wrapper.debug());
        expect(wrapper.containsMatchingElement(<h1>Nate News</h1>)).toBe(false);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render an image', () => {
        const wrapper_ = shallow(<img src="./src/images/nate-news.png" />)
        expect(wrapper_).toMatchSnapshot();
    });

})

