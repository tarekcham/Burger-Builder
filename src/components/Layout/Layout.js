import React, { Fragment, Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

export default class layout extends Component {

	state= {
		showSideDrawer: true
	}
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});

	}
	render() {
		return (
			<Fragment>
				<Toolbar />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</Fragment>
		);
	}
}
