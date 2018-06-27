import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Navigation from "./Blocks/Navigation";
import BurgerMenue from "./Blocks/BurgerMenue";
import Logo from "./Blocks/Logo";

import "./Header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [
                {
                    title: "Home",
                    link: "/",
                },
                {
                    title: "Pages",
                    link: [
                        {
                            title: "Home",
                            link: "/",
                        },
                        {
                            title: "Page2",
                            link: "/page2",
                        }
                    ]
                },
                {
                    title: "Page3",
                    link: "/",
                },
            ],
            sidebarActive: this.props.closeSidebar
        };
    };


    sideBarToggle(e){
        if (this.state.sidebarActive) {
            this.setState({
                sidebarActive: e
            });
            this.props.onChange(e);
        }else{
            this.setState({
                sidebarActive: e
            });
            this.props.onChange(e);
        }
    }


    render() {
        return (
            <header>
                <BurgerMenue active={this.props.closeSidebar} onChange={(e) => {this.sideBarToggle(e)}}/>
                <Logo width="100px" height="100px"/>
                <Navigation active={this.props.closeSidebar} nav={this.state.nav}/>
            </header>
        );
    }
}

export default Header;
