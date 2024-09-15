import { createContext, PropsWithChildren, RefObject, useRef } from 'react';

interface ModalInitialState {
	onOpen: () => void;
	onClose: () => void;
	ref: RefObject<HTMLDialogElement> | null;
}

export const ModalContext = createContext<ModalInitialState>({
	onOpen: () => {},
	onClose: () => {},
	ref: null,
});

export default function ModalProvider({ children }: PropsWithChildren) {
	const modalRef = useRef<HTMLDialogElement>(null);

	function handleOpen() {
		if (modalRef.current) {
			modalRef.current.show();
		}
	}

	function handleClose() {
		if (modalRef.current) {
			modalRef.current.close();
		}
	}

	return (
		<ModalContext.Provider
			value={{
				onClose: handleClose,
				onOpen: handleOpen,
				ref: modalRef,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
