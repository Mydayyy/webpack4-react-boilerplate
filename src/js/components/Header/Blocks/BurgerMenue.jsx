import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";


class BurgerMenue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        }
    }
    componentDidUpdate(prevProps) {
      if (this.props.active !== prevProps.active) {
          this.setState({
              active: this.props.active
          });
      }
    }

    toggleClass(e){
        if (this.state.active) {
            this.setState({
                active: false
            });

            this.props.onChange(false);
        }else {
            this.setState({
                active: true
            });
            this.props.onChange(true);
        }

    }


    render() {
        return (
            <div className={this.state.active ? "menue-container change" : "menue-container"} onClick={() => {this.toggleClass(this)}}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
        );
    }
}

export default BurgerMenue;
