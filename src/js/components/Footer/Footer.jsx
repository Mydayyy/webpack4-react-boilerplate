import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FooterLinks from "./Blocks/FooterLinks";
import Legal from "./Blocks/Legal";

import "./Footer.scss";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    title: "Information",
                    Pagelinks: [
                        {
                            title: "About Us",
                            link: "/",
                        },
                        {
                            title: "Privacy Policy",
                            link: "/page2",
                        }
                    ]
                },
                {
                    title: "Service",
                    Pagelinks: [
                        {
                            title: "Contact",
                            link: "/",
                        },
                        {
                            title: "Projects",
                            link: "/page2",
                        }
                    ]
                },

                {
                    title: "Blah",
                    Pagelinks: [
                        {
                            title: "Blah",
                            link: "/",
                        },
                        {
                            title: "Daten Policy",
                            link: "/page2",
                        }
                    ]
                },
                {
                    title: "Social",
                    Pagelinks: [
                        {
                            title: "Facebook",
                            link: "/",
                            icon: "/assets/img/fb.svg"
                        },
                        {
                            title: "Instagram",
                            link: "/page2",
                            icon: "/assets/img/ig.svg"
                        }
                    ]
                }
            ]
        };
    };


    render() {
        return (
            <footer className="container-fluid">
                <FooterLinks links={this.state.links}/>
                <Legal />
            </footer>
        );
    }
}

export default Footer;
