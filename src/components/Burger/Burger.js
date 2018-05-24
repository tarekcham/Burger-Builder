import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
	let transformedIngredient = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredients type={igKey} key={igKey + i} />;
			});
		})
		.reduce((arr, ele) => {
			return arr.concat(ele);
		});
	if (transformedIngredient.length === 0) {
		transformedIngredient = <p> Please start adding ingredients</p>;
	}

	console.log(transformedIngredient);

	return (
		<div className={classes.Burger}>
			<BurgerIngredients type="bread-top" />
			{transformedIngredient}

			<BurgerIngredients type="bread-bottom" />
		</div>
	);
};

export default burger;
