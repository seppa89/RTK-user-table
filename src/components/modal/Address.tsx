interface AddressProps {
	address: Address;
}

export default function Address({ address }: AddressProps) {
	return (
		<div>
			<h2>Address</h2>
			<p>
				{address.zipcode} {address.street}
			</p>
			<p>{address.suite}</p>
			<p>{address.city}</p>
		</div>
	);
}
