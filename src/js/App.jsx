import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";

import {Route, Switch, Redirect} from "react-router-dom";

import Page1 from "~/pages/Page1/Page1";
import Page2 from "~/pages/Page2/Page2";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="app">
                <Switch>
                    <Route exact={true} name="/" path="/" component={Page1} />
                    <Route exact={true} name="page1" path="/page1" component={Page1} />
                    <Route exact={true} name="page2" path="/page2" component={Page2} />
                    <Route
                        render={function() {
                            return <h1>We found exactly zero pages at the path you were looking for. Sorry!</h1>;
                        }}
                    />
                </Switch>
            </div>
        );
    }
}

export default hot(module)(App);
