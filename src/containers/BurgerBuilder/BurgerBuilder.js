import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
	state = {
		ingredients: {
			saled: 1,
			bacon: 1,
			cheese: 2,
			meat: 2
		}
	};

	render() {
		return (
			<Fragment>
				<Burger ingredients={this.state.ingredients} />
				<div>Build Controls</div>
			</Fragment>
		);
	}
}
