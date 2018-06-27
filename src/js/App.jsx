import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";

import {Route, Switch, Redirect} from "react-router-dom";

import index from "~/pages/index/index";
import Page2 from "~/pages/Page2/Page2";
import Header from "~/components/Header/Header"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menueActive : false

        };
    };

    overlay(e){
        this.setState({
            menueActive: e
        })
    }

    closeSidebar(){
        if (this.state.menueActive) {
            this.setState({
                menueActive: false
            })
        }
    }

    render() {
        return (
            <div id="app" >
                <Header closeSidebar={this.state.menueActive} onChange={(e)=> {this.overlay(e)}}/>
                <div id="content" className="container-fluid" style={{opacity: this.state.menueActive ? 0.4 : 1}} onClick={()=>this.closeSidebar()}>
                    <Switch >
                        <Route exact={true} name="/" path="/" component={index} />
                        <Route exact={true} name="page2" path="/page2" component={Page2} />
                        <Route
                            render={function() {
                                return <h1>We found exactly zero pages at the path you were looking for. Sorry!</h1>;
                            }}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
