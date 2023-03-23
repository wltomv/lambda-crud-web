import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { addUser, deleteUser, getData } from "../services/user.service";
import Loader from "../components/Loader/Loader";

export const UserContext = createContext();

export function UsersProvider({ children }) {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const getUsers = async () => {
		const data = await getData();
		setUsers(data);
	};

	useEffect(() => {
		setLoading(true);
		getUsers();
		setLoading(false);
	}, []);

	const addData = async (userData, file) => {
		setLoading(true);
		const res = await addUser(userData, file);
		setUsers((users) => [...users, res.data]);
		setLoading(false);
		return res;
	};

	const deleteData = async (id) => {
		setLoading(true);
		const res = await deleteUser(id);
		if (res.status) await getUsers();
		setLoading(false);

		return res;
	};

	const postContextValue = useMemo(
		() => ({
			users,
			setUsers,
			loading,
			addData,
			deleteData,
		}),
		[users, setUsers, loading]
	);

	return (
		<UserContext.Provider value={postContextValue}>
			{loading && <Loader />}
			{children}
		</UserContext.Provider>
	);
}

UsersProvider.propTypes = { children: PropTypes.node.isRequired };
