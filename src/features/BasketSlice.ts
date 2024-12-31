import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IBasketSliceState {
   items: { [key: string]: number };
}

const initialState: IBasketSliceState = {
   items: {},
};

export const basketSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      pushElementInBasket: (state, action: PayloadAction<string>) => {
         if (!Boolean(action.payload in state.items)) {
            state.items[action.payload] = 0;
         }
         if (state.items[action.payload] < 99) {
            state.items[action.payload] += 1;
         }
      },
      popElementInBasket: (state, action: PayloadAction<string>) => {
         if (state.items[action.payload] <= 1) {
            return;
         }
         if (!Boolean(action.payload in state.items)) {
            return;
         }
         state.items[action.payload] -= 1;
      },

      removeElementFromBasket: (state, action: PayloadAction<string>) => {
         delete state.items[action.payload];
      },
      cleanBasket: (state) => {
         state.items = {};
      },
   },
});

export const pizzasSelector = (state: RootState) => state.basketSlice.items;

export const {
   pushElementInBasket,
   popElementInBasket,
   removeElementFromBasket,
   cleanBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
