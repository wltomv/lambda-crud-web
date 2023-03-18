import React, { Suspense } from "react";
import Card from "../../components/Card/Card";
import { getUsers } from "../../services/user.service";
import styles from "./Grid.module.css";

const apiData = getUsers();

function Grid() {
	const data = apiData.read();

	return (
		<div className={styles.container}>
			<Suspense fallback={<div>Loading...</div>}>
				{data?.results.map((user) => (
					<Card image={user.image} name={user.name} profile={user.profile} />
				))}
			</Suspense>
		</div>
	);
}

export default Grid;
