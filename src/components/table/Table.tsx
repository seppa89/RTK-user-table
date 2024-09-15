import { useState } from 'react';
import { selectFilteredUsers } from '../../store/selectors';
import { useAppSelector } from '../../store/store';
import classes from './Table.module.css';
import SortDirections from './SortDirections';
import { useModal } from '../../hooks/useModal';

const columns: ColumnsName[] = ['name', 'username', 'email', 'phone'];

export default function Table() {
	const filteredUsers = useAppSelector(selectFilteredUsers);
	const [sortOptions, setSortOptions] = useState<SortOptions>({
		name: '',
		value: 'asc',
	});
	const modal = useModal();

	function handleSort(column: ColumnsName) {
		setSortOptions(prevSort => {
			const isNewColumn = column !== prevSort.name;
			const direction: SortOptions['value'] = isNewColumn
				? 'asc'
				: prevSort.value === 'asc'
				? 'desc'
				: 'asc';

			return { name: column, value: direction };
		});
	}

	const sortedUsers = filteredUsers.sort((a, b) => {
		const direction = sortOptions.value === 'asc' ? 1 : -1;
		if (sortOptions.name) {
			return a[sortOptions.name].toLowerCase() >
				b[sortOptions.name].toLowerCase()
				? direction
				: -direction;
		} else return 0;
	});

	function handleToggleModal(id: number) {
		if (modal.userId === id) {
			modal.onClose();
		} else {
			modal.setUserId(id);
			modal.onOpen();
		}
	}

	return (
		<table className={classes.table}>
			<thead className={classes.head}>
				<tr>
					{columns.map(col => (
						<th key={col} onClick={() => handleSort(col)}>
							{col}
							<SortDirections
								activeColumn={sortOptions.name}
								activeDirection={sortOptions.value}
								currentColumn={col}
							/>
						</th>
					))}
				</tr>
			</thead>
			<tbody className={classes.body}>
				{sortedUsers.length === 0 ? (
					<tr className={classes.empty}>
						<td className={classes.empty}>No users found</td>
					</tr>
				) : (
					sortedUsers?.map(user => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td onClick={() => handleToggleModal(user.id)}>{user.phone}</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
}
