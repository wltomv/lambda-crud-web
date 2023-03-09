import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Grid.module.css";

function Grid() {
	return (
		<div className={styles.container}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />

			<Card />
			<Card />
		</div>
	);
}

export default Grid;
