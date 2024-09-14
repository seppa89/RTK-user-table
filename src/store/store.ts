import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
	reducer: {
		users: usersReducer,
		filters: filtersReducer,
	},
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootStore>();
