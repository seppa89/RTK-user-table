import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export function useModal() {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('ModalContext was use outside of ModalProvider');
	}

	return context;
}
