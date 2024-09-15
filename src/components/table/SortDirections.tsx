import sortIcon from '../../assets/sort.svg';
import sortIconDown from '../../assets/sort-alpha-down.svg';
import sortIconUp from '../../assets/sort-alpha-up.svg';

interface SortDirectionsProps {
	activeColumn: ColumnsName | '';
	currentColumn: ColumnsName | '';
	activeDirection: SortOptions['value'];
}

export default function SortDirections({
	activeColumn,
	activeDirection,
	currentColumn,
}: SortDirectionsProps) {
	let content = (
		<div>
			<img src={sortIcon} alt='#' />
		</div>
	);
	if (activeColumn === currentColumn) {
		if (activeDirection === 'desc') {
			content = (
				<div>
					<img src={sortIconUp} alt='#' />
				</div>
			);
		} else {
			content = (
				<div>
					<img src={sortIconDown} alt='#' />
				</div>
			);
		}
	}
	return content;
}
