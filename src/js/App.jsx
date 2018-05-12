import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader"

import Button from "~/components/Button/Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			counter: 0
		};
    }

	onButtonClick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

    render() {
        return (
			<div id="app">
				<Button name={"Clicked: " + this.state.counter} onClick={this.onButtonClick.bind(this)} secondary={true}></Button>
			</div>
		);
    }
}
export default hot(module)(App);
