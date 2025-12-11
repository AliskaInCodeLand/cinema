import { createSlice } from '@reduxjs/toolkit';

interface currentQueryState {
  countries: string;
  genre: string;
  order: string;
  type: string;
  year: string;
  page: number;
  keyword: string;
}

const initialState: currentQueryState = {
  countries: '',
  genre: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
  keyword: '',
};

const searchQuerySlice = createSlice({
  name: 'searchQuerySlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
