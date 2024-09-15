import { selectFilteredUsers } from '../../store/selectors';
import { useAppSelector } from '../../store/store';
import EmptyRow from './EmptyRow';
import RowData from './RowData';
import classes from './Table.module.css';

interface TableBodyProps {
	sortOptions: SortOptions;
}

export default function TableBody({ sortOptions }: TableBodyProps) {
	const filteredUsers = useAppSelector(selectFilteredUsers);

	const sortedUsers = filteredUsers.sort((a, b) => {
		const direction = sortOptions.value === 'asc' ? 1 : -1;
		if (sortOptions.name) {
			return a[sortOptions.name].toLowerCase() >
				b[sortOptions.name].toLowerCase()
				? direction
				: -direction;
		} else return 0;
	});

	return (
		<tbody className={classes.body}>
			{sortedUsers.length === 0 ? (
				<EmptyRow />
			) : (
				sortedUsers?.map(user => <RowData key={user.id} user={user} />)
			)}
		</tbody>
	);
}
