import SortDirections from './SortDirections';
import classes from './Table.module.css';

interface TableHeadProps {
	onSort: React.Dispatch<React.SetStateAction<SortOptions>>;
	currentSort: SortOptions;
}

const columns: ColumnsName[] = ['name', 'username', 'email', 'phone'];

export default function TableHead({ onSort, currentSort }: TableHeadProps) {
	function handleSort(column: ColumnsName) {
		onSort(prevSort => {
			const isNewColumn = column !== prevSort.name;
			const direction: SortOptions['value'] = isNewColumn
				? 'asc'
				: prevSort.value === 'asc'
				? 'desc'
				: 'asc';

			return { name: column, value: direction };
		});
	}
	return (
		<thead className={classes.head}>
			<tr>
				{columns.map(col => (
					<th key={col} onClick={() => handleSort(col)}>
						{col}
						<SortDirections
							activeColumn={currentSort.name}
							activeDirection={currentSort.value}
							currentColumn={col}
						/>
					</th>
				))}
			</tr>
		</thead>
	);
}
