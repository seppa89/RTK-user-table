import { useModal } from '../../hooks/useModal';
import Address from './Address';
import classes from './Modal.module.css';

export default function Modal() {
	const { ref, onClose, position } = useModal();

	return (
		<dialog
			ref={ref}
			onClose={onClose}
			id='dialog'
			style={{
				right: `${position.x}px`,
				top: `${position.y}px`,
			}}
			className={classes.modal}
		>
			<div className={classes.content}>
				<Address />
				<button type='button' onClick={onClose}>
					x
				</button>
			</div>
		</dialog>
	);
}
