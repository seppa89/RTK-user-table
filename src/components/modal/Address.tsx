import { useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import classes from './Modal.module.css';
import { selectUserById } from '../../store/selectors';

export default function Address() {
	const { userId } = useModal();
	const user = useSelector(selectUserById(userId as number));

	return (
		<div className={classes.address}>
			<h2>Address</h2>
			<p>
				{user?.address.zipcode} {user?.address.street}
			</p>
			<p>{user?.address.suite}</p>
			<p>{user?.address.city}</p>
		</div>
	);
}
