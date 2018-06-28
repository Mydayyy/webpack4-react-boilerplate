import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";



import {Link} from "react-router-dom";

class FooterLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    openDropDown(e){
        e.classList.add("mystyle");
    }

    render() {

        let linkContainer;
        let linkBlock;
        let countBlock = this.props.links.length;
        let columnWidth = Math.round(12/ countBlock);
        let blockStyle = "col-lg-" + columnWidth + " col-md-" + columnWidth + " col-sm-" +  columnWidth + " col-xs-6";


        if (this.props.links){
            linkContainer = this.props.links.map(links =>{
                if (links.Pagelinks.length > 1) {
                    linkBlock = links.Pagelinks.map(nav =>{
                        if (nav.icon){
                            return(
                                <li key={nav.title}>
                                    <Link to={nav.link}><img style={{width: "30px", margin: "5px 0px"}} alt={nav.titl} src={nav.icon}/></Link>
                                </li>
                            );
                        }else{
                            return(
                                <li key={nav.title}>
                                    <Link to={nav.link}>{nav.title}</Link>
                                </li>
                            )
                        }
                    });
                }
                return(
                    <div key={links.title} className={blockStyle}>
                        <h5>{links.title}</h5>
                        <ul className="footer-link-container">
                            {linkBlock}
                        </ul>
                    </div>
                );
            });
        }
        return (
            <nav className="footer-nav row" id="sidebar-wrapper" role="navigation" >
                {linkContainer}
            </nav>
        );
    }
}

export default FooterLinks;
