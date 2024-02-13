import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface searchSliceState {
   searchValue: string;
   filterValue: string;
}

const initialState: searchSliceState = {
   searchValue: "",
   filterValue: "id",
};

export const searchSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      changeSearch: (state, action: PayloadAction<string>) => {
         state.searchValue = action.payload;
      },
      changeFilter: (state, action: PayloadAction<string>) => {
         state.filterValue = action.payload;
      },
   },
});

export const filterSelector = (state: RootState) => state.serchFilter;

export const { changeSearch, changeFilter } = searchSlice.actions;

export default searchSlice.reducer;
