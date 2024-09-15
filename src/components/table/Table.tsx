import { selectFilteredUsers } from '../../store/selectors';
import { useAppSelector } from '../../store/store';
import classes from './Table.module.css';

const columns: ColumnsName[] = ['name', 'username', 'email', 'phone'];

export default function Table() {
	const filteredUsers = useAppSelector(selectFilteredUsers);

	return (
		<table className={classes.table}>
			<thead className={classes.head}>
				<tr>
					{columns.map(col => (
						<th key={col}>{col}</th>
					))}
				</tr>
			</thead>
			<tbody className={classes.body}>
				{filteredUsers.length === 0 ? (
					<tr className={classes.empty}>
						<td className={classes.empty}>No users found</td>
					</tr>
				) : (
					filteredUsers?.map(user => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
}
