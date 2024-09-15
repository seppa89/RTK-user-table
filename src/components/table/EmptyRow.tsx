import classes from './Table.module.css';

export default function EmptyRow() {
	return (
		<tr>
			<td className={classes.empty}>No users found</td>
		</tr>
	);
}
