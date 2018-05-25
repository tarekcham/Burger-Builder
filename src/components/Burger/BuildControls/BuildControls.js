import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import { formatPrice } from '../../../helpers.js';
import classes from "./BuildControls.css";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
	<p><strong>Current Price: {props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<BuildControl
				added={() => props.ingredientAdded(ctrl.type)}
				key={ctrl.label}
				label={ctrl.label}
				removed={()=> props.ingredientDelete(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
	</div>
);

export default buildControls;
