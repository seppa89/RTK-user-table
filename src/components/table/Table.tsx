import { useState } from 'react';
import classes from './Table.module.css';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table() {
	const [sortOptions, setSortOptions] = useState<SortOptions>({
		name: '',
		value: 'asc',
	});

	return (
		<table className={classes.table}>
			<TableHead currentSort={sortOptions} onSort={setSortOptions} />
			<TableBody sortOptions={sortOptions} />
		</table>
	);
}
