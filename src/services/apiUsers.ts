import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk<User[]>(
	'users/fetchUsers',
	async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);

			if (!response.ok) {
				throw new Error('Fetching users failed. Please try again.');
			}

			const data = (await response.json()) as User[];

			const convertedUsers = data.map(
				({ id, name, username, email, phone, address }) => ({
					id,
					name,
					username,
					email,
					phone,
					address,
				})
			);

			return convertedUsers;
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(
					error.message ?? 'Something went wrong, please try again.'
				);
			} else {
				throw new Error('Something went wrong, please try again.');
			}
		}
	}
);
