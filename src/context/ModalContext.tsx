import {
	createContext,
	PropsWithChildren,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react';

interface ModalInitialState {
	onOpen: () => void;
	onClose: () => void;
	ref: RefObject<HTMLDialogElement> | null;
	userId: number | null;
	setUserId: (id: number | null) => void;
	position: { x: number; y: number };
	setPosition: ({ x, y }: { x: number; y: number }) => void;
}

export const ModalContext = createContext<ModalInitialState>({
	onOpen: () => {},
	onClose: () => {},
	ref: null,
	setUserId: () => {},
	userId: null,
	position: { x: 0, y: 0 },
	setPosition: () => {},
});

export default function ModalProvider({ children }: PropsWithChildren) {
	const modalRef = useRef<HTMLDialogElement>(null);
	const [userId, setUserId] = useState<number | null>(null);
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		function handleCloseModalByEsc(e: KeyboardEvent) {
			if (e.key === 'Escape' && modalRef.current?.open) {
				handleClose();
			}
		}
		function handleCloseModalByClick(e: MouseEvent) {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				handleClose();
			}
		}

		if (modalRef?.current && modalRef?.current.open) {
			document.addEventListener('keydown', handleCloseModalByEsc);
			document.addEventListener('click', handleCloseModalByClick);
		}

		return () => {
			document.removeEventListener('keydown', handleCloseModalByEsc);
			document.removeEventListener('click', handleCloseModalByClick);
		};
	}, [modalRef.current?.open]);

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
				position,
				setPosition,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
