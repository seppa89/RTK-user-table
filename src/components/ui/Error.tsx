interface ErrorProps {
	error: string;
}

export default function Error({ error }: ErrorProps) {
	return <p className='error'>{error}</p>;
}
