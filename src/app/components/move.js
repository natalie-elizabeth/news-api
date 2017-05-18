import React from 'react';
import { BrowserRouter as NavLink, Link, Router } from 'react-router-dom';

export default class Navigate extends React.Component {
    render() {
        return (
            <div>

                <ul className='nav'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'> Home </NavLink>
                    </li>

                </ul>
            </div>
        )
    }


}
