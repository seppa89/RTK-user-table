import { MouseEvent } from 'react';
import { useModal } from '../../hooks/useModal';
import classes from './Table.module.css';

interface RowDataProps {
	user: User;
}

export default function RowData({ user }: RowDataProps) {
	const modal = useModal();

	function handleToggleModal(e: MouseEvent) {
		e.stopPropagation();
		if (modal.userId === user.id) {
			modal.onClose();
		} else {
			const rect = e.currentTarget.getBoundingClientRect();
			const x = -550;
			const y = rect.y - rect.height;

			modal.setPosition({ x, y });
			modal.setUserId(user.id);
			modal.onOpen();
		}
	}

	return (
		<tr>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>
				{user.phone}
				<div
					title='address'
					className={classes.more}
					onClick={handleToggleModal}
				>
					<span />
					<span />
					<span />
				</div>
			</td>
		</tr>
	);
}
