import React, { Component } from 'react';
import { Drawer } from 'material-ui';
import { MenuItem } from 'material-ui';
import { RaisedButton } from 'material-ui';
import { BrowserRouter as Link, Router, Route } from 'react-router-dom';


export default class Sidecollapse extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <RaisedButton label="News API" onTouchTap={this.handleToggle} />
                <Drawer open={this.state.open}>
                    <MenuItem><Link to="/">General</Link></MenuItem>

                </Drawer>
            </div>
        );
    }
}