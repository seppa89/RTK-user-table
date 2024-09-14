import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from '../../services/apiUsers';

interface InitialUsersState {
	users: User[] | null;
	status: 'idle' | 'pending' | 'success' | 'error';
	error: string | null;
}

const initialUsersState: InitialUsersState = {
	users: null,
	status: 'idle',
	error: null,
};

const usersSlice = createSlice({
	name: 'users',
	initialState: initialUsersState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getUsers.pending, state => {
				state.status = 'pending';
			})
			.addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.status = 'success';
				state.users = action.payload;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.error.message || 'Failed fetching users.';
				state.users = [];
			});
	},
});

export default usersSlice.reducer;
