import React from "react";
import {Link} from "react-router-dom";

import Button from "~/components/Button/Button";
import image from "__assets__/img/dummy.png";

import "./index.scss";

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <div className="row">
                    <h1 className="col-lg-12">Hello World !</h1>
                    <p className="col-lg-6 col-md-6 col-xs-12">
                        Lorem Ipsum
                    </p>
                    <img className="col-lg-6 col-md-6 col-xs-12" src={image}/>
                </div>
        );
    }
}

export default Page1;
