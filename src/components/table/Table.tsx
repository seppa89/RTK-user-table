import { useAppSelector } from '../../store/store';

const columns: ColumnsName[] = ['name', 'username', 'email', 'phone'];

export default function Table() {
	const users = useAppSelector(store => store.users.users);

	return (
		<table>
			<thead>
				<tr>
					{columns.map(col => (
						<th key={col}>{col}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{users?.map(user => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
