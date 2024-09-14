import { useEffect } from 'react';
import './App.css';
import { getUsers } from './services/apiUsers';
import { useAppDispatch, useAppSelector } from './store/store';

export default function App() {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector(store => store.users);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(getUsers());
		}
	}, [status, dispatch]);

	return (
		<main>
			<h1>Users List</h1>
		</main>
	);
}
