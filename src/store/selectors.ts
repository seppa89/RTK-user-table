import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from './store';

const getFilters = (store: RootStore) => store.filters.filters;
const getUsers = (store: RootStore) => store.users.users;

export const selectFilteredUsers = createSelector(
	[getUsers, getFilters],
	(users, filters) => {
		if (users && users.length > 0) {
			return users.filter(
				({ name, username, email, phone }) =>
					name.toLowerCase().includes(filters.name) &&
					username.toLowerCase().includes(filters.username) &&
					email.toLowerCase().includes(filters.email) &&
					phone.toLowerCase().includes(filters.phone)
			);
		} else return [];
	}
);

export const selectUserById = (id: number) =>
	createSelector([getUsers], users => {
		return users?.find(user => user.id === id);
	});
