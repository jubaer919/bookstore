import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagoriesList: [],
};

const catagorieSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    getStatus: () => 'Under construction',
  },
});

export const { getStatus } = catagorieSlice.actions;
export default catagorieSlice.reducer;
