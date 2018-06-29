import React from "react";
import {Link} from "react-router-dom";
import image from "__assets__/img/dummy.png";

import "./Index.scss";

class Index extends React.Component {
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

export default Index;
