import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Input from '../ui/Input';
import { setFilter } from '../../features/filters/filtersSlice';
import classes from './Filters.module.css';

export default function Filters() {
	const dispatch = useAppDispatch();
	const {
		filters: { name, username, email, phone },
	} = useAppSelector(store => store.filters);

	function handleFilter(e: ChangeEvent<HTMLInputElement>) {
		dispatch(
			setFilter({ name: e.target.name as FilterName, value: e.target.value })
		);
	}

	return (
		<div className={classes.filters}>
			<div>
				<Input
					id='name'
					name='name'
					type='search'
					placeholder=' '
					label='Search by name'
					onChange={handleFilter}
					value={name}
				/>
			</div>
			<div>
				<Input
					id='username'
					name='username'
					type='search'
					placeholder=' '
					label='Search by username'
					onChange={handleFilter}
					value={username}
				/>
			</div>
			<div>
				<Input
					id='email'
					name='email'
					type='search'
					placeholder=' '
					label='Search by email'
					onChange={handleFilter}
					value={email}
				/>
			</div>
			<div>
				<Input
					id='phone'
					name='phone'
					type='search'
					placeholder=' '
					label='Search by phone'
					onChange={handleFilter}
					value={phone}
				/>
			</div>
		</div>
	);
}
