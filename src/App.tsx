import { useEffect } from 'react';
import './App.css';
import { getUsers } from './services/apiUsers';
import { useAppDispatch, useAppSelector } from './store/store';
import Error from './components/ui/Error';
import Spinner from './components/ui/Spinner';
import Table from './components/table/Table';
import Filters from './components/filters/Filters';
import Modal from './components/modal/Modal';

export default function App() {
	const dispatch = useAppDispatch();
	const { status, error } = useAppSelector(store => store.users);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(getUsers());
		}
	}, [status, dispatch]);

	if (status === 'error')
		return <Error error={error || 'Some error occured. Pleas try again.'} />;
	if (status === 'pending') return <Spinner />;

	return (
		<main>
			<h1 className='heading'>Users List</h1>
			<Filters />
			<Table />
			<Modal />
		</main>
	);
}
