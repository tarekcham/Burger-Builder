import React, { Fragment, Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

export default class layout extends Component {

	state= {
		showSideDrawer: false
	}
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});

	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState)=>{
			return {showSideDrawer:!prevState.showSideDrawer}

		})
			

}

	render() {
		return (
			<Fragment>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</Fragment>
		);
	}
}
