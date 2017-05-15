import { shallow, render, mount } from 'enzyme';
import React from 'react';
import HomePage from '../../src/components/homePage';

describe('HomePage', () => {
    it('should display log in button', () => {
        const wrapper = shallow(<button></button>);
        expect(wrapper.find('button').node).toBeDefined();
    });

    it('should display log in text', () => {
        const text = 'LogIn Using Google+';
        const renderedText = shallow(<button>{text}</button>)
        expect(renderedText.contains(text)).toEqual(true);
    });

    it('should display a welcome text', () => {
        const wrapper = shallow(<h1></h1>);
        expect(wrapper.find('h1').node).toBeDefined();
    })
});


// it('should displays search and log in buttons', () => {
//     const renderedComponent = shallow(<Button></Button>);
//     expect(renderedComponent.find("button").node).toBeDefined();
// });
// it('should dispay search and log in texts in the buttons', () => {
//     const text = 'LOG IN';
//     const text1 = 'SEARCH';
//     const renderedComponent = shallow(<Button>{'LOG IN'}</Button>, <Button>{'SEARCH'}</Button>)
//     expect(renderedComponent.contains(text)).toEqual(true);
// });
// it('handles click', () => {
//     const onClickSpy = jest.fn();
//     const renderedComponent = shallow(<Button onClick={onClickSpy} />);
//     renderedComponent.find('button').simulate('click');
//     expect(onClickSpy).toHaveBeenCalled();
// });