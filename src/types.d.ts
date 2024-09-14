type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
};

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	address: Address;
};
