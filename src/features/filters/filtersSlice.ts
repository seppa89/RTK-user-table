import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialFiltersState {
	filters: FiltersName;
}

const initialFiltersState: InitialFiltersState = {
	filters: {
		name: '',
		username: '',
		email: '',
		phone: '',
	},
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState: initialFiltersState,
	reducers: {
		setFilter(
			state,
			action: PayloadAction<{ name: FilterName; value: string }>
		) {
			state.filters[action.payload.name] = action.payload.value.toLowerCase();
		},
	},
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
