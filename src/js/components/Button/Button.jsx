import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

    onClick() {
        this.props.onClick();
    }

    render() {
        const className = classNames({button: true, primary: this.props.primary, secondary: this.props.secondary});

        return (
            <button className={className} onClick={this.onClick.bind(this)}>
                {this.props.name}
            </button>
        );
    }
}

Button.defaultProps = {
	name: "",
	primary: false,
	secondary: false,
	onClick: () => {}
};

Button.propTypes = {
    name: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
