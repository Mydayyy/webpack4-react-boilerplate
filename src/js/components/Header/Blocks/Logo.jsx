import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import image from "__assets__/img/logo.svg";

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <img className="logo" style={{width: this.props.width, height: this.props.height}} src={image}/>
        );
    }
}

export default Logo;
