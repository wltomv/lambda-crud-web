import React, { Suspense } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

import styles from "./Grid.module.css";

function Grid({ users }) {
	return (
		<div className={styles.container}>
			<Suspense fallback={<Loader />}>
				{users?.map((user) => (
					<Card user={user} key={user.id} />
				))}
			</Suspense>
		</div>
	);
}

export default Grid;
