import {
	createContext,
	PropsWithChildren,
	RefObject,
	useRef,
	useState,
} from 'react';

interface ModalInitialState {
	onOpen: () => void;
	onClose: () => void;
	ref: RefObject<HTMLDialogElement> | null;
	userId: number | null;
	setUserId: (id: number | null) => void;
}

export const ModalContext = createContext<ModalInitialState>({
	onOpen: () => {},
	onClose: () => {},
	ref: null,
	setUserId: () => {},
	userId: null,
});

export default function ModalProvider({ children }: PropsWithChildren) {
	const modalRef = useRef<HTMLDialogElement>(null);
	const [userId, setUserId] = useState<number | null>(null);

	function handleOpen() {
		if (modalRef.current) {
			modalRef.current.show();
		}
	}

	function handleClose() {
		if (modalRef.current) {
			modalRef.current.close();
			setUserId(null);
		}
	}

	return (
		<ModalContext.Provider
			value={{
				onClose: handleClose,
				onOpen: handleOpen,
				ref: modalRef,
				setUserId,
				userId,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
