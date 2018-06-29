import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";

import {Route, Switch, Redirect} from "react-router-dom";
import Particles from 'react-particles-js';


import Index from "~/pages/Index/Index";
import Contact from "~/pages/Contact/Contact";
import Header from "~/components/Header/Header"
import Footer from "~/components/Footer/Footer"


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
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 300,
                                    density: {
                                        enable: true,
                                        value_area: 5000
                                    }
                                },

                                color: {
                                    value: "#000"
                                },

                                line_linked: {
                                    color: "#1e00ff",
                                    shadow: {
                                        enable: true,
                                        color: "#3CA9D1"
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "window",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 800,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 800,
                                        "size": 80,
                                        "duration": 2,
                                        "opacity": 0.8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 0.5
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                    }}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        opacity: 1
                    }}
                />
                <Switch >
                    <Route exact={true} name="Home" path="/" component={Index} />
                    <Route exact={true} name="Contact" path="/contact" component={Contact} />
                    <Route
                        render={function() {
                            return <h1>We found exactly zero pages at the path you were looking for. Sorry!</h1>;
                        }}
                    />
                </Switch>
                <Footer />
            </div>

        </div>
    );
}
}

export default hot(module)(App);
