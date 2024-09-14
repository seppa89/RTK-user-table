import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootStore>();
