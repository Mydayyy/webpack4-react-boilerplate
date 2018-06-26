import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let navItems;
        if (this.props.nav) {
            navItems = this.props.nav.map(nav =>{
                return(
                    <Link key={nav.title} to={nav.link}>
                        <li  className="navitem">{nav.title}</li>
                    </Link>
                )
            });
        }
        return (
            <nav className={this.props.active ? "sidebar opened" : "sidebar closed"} id="sidebar-wrapper" role="navigation" >
                <ul className="nav sidebar-nav">
                    {navItems}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
