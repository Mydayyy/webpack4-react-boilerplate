import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Link} from "react-router-dom";

class Legal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="row" style={{marginTop: "50px", marginBottom: "20px"}}>
                <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{textAlign: "center"}}>
                    © 2011 JOHN DOE ALL RIGHTS RESERVED
                </span>
            </div>
        );
    }
}

export default Legal;
