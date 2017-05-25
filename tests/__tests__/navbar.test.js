import { shallow, render, mount } from 'enzyme';
import React from 'react';
import NavBar, { SelectedTab } from '../../src/app/components/NavBar';

describe('NavBar', () => {
  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  it('render 1 <NavBar/> component', () => {
    const wrapper = shallow(<NavBar />);
    console.log(wrapper.props());
    expect(wrapper).toHaveLength(1);
  });
  it('')
});

  // describe('changeLocation', function () {
  //   it('should have a type of CHANGE_LOCATION', function () {
  //     expect(changeLocation().type).toEqual('CHANGE_LOCATION');
  //   });
  // });


// it('should have a type of SET_DATA', function () {
//   expect(setData().type).toEqual('SET_DATA');
// });
// it('should pass on the temps we pass in', function () {
//   var temps = ['31', '32'];
//   expect(setTemps(temps).temps).toEqual(temps);
// });
