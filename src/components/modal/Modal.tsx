import { useModal } from '../../hooks/useModal';

export default function Modal() {
	const { onClose, ref } = useModal();
	return (
		<dialog ref={ref} onClose={onClose} id='dialog'>
			<p>modal heading</p>
			<p>modal content</p>
			<button onClick={onClose}>X</button>
		</dialog>
	);
}
