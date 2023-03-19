import React, { Suspense } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { getUsers } from "../../services/user.service";
import styles from "./Grid.module.css";

const apiData = getUsers();

function Grid() {
	const data = apiData.read();

	return (
		<>
			<div className={styles.container}>
				<Suspense fallback={<Loader />}>
					{data?.map((user) => (
						<Card user={user} key={user.id} />
					))}
				</Suspense>
			</div>
		</>
	);
}

export default Grid;
