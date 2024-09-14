import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: FilterName;
	name: FilterName;
	label: string;
}

export default function Input({
	id,
	name,
	type = 'text',
	label,
	...props
}: InputProps) {
	return (
		<>
			<input id={id} type={type} name={name} {...props} />
			<label htmlFor={id}>{label}</label>
		</>
	);
}
