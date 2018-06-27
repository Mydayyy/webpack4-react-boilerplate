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

    openDropDown(e){
        e.classList.add("mystyle");
    }

    render() {
        let navItems;
        let subLinks;
        if (this.props.nav) {
            navItems = this.props.nav.map(nav =>{
                if (nav.link.length > 1) {
                    subLinks = nav.link.map(nav =>{
                        return(
                            <li key={nav.link} className="dropdown-item">
                                <Link to={nav.link}>{nav.title}</Link>
                            </li>
                            )
                        });
                    return(
                        <li className="navitem dropdown" key={nav.title}>
                            <a className="dropdownArrow">{nav.title}</a>
                            <ul className="dropdown-container">
                                {subLinks}
                            </ul>
                        </li>
                    )
                }else {
                    return(
                        <li key={nav.title} className="navitem">
                            <Link to={nav.link}>{nav.title}</Link>
                        </li>
                    )
                }
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
