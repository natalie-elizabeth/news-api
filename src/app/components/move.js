import React, { Component } from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';


function Move() {
  return (
    < div >
      <ul className='nav'>
        <li>
          <BrowserRouter>
            <NavLink exact activeClassName='active' to='/'> Home </NavLink>
          </BrowserRouter>
        </li>

      </ul>

    </div >
  );

}
module.exports = Move;
