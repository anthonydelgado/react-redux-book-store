import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="green darken-3">
                <div className="nav-wrapper center">
                    <a href="#" className="brand-logo center">Books & Node Modules</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="https://github.com/anthonydelgado">GitHub</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}