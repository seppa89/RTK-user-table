import { useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import Address from './Address';
import { selectUserById } from '../../store/selectors';

export default function Modal() {
	const { onClose, ref, userId, position } = useModal();
	const user = useSelector(selectUserById(userId as number));

	return (
		<dialog
			ref={ref}
			onClose={onClose}
			id='dialog'
			style={{
				right: `${position.x}px`,
				top: `${position.y}px`,
			}}
		>
			{user && <Address address={user.address} />}
			<button type='button' onClick={onClose}>
				x
			</button>
		</dialog>
	);
}
