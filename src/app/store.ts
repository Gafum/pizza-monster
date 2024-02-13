import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/SearchSlice";
import basketReducer from "../features/BasketSlice";

export const store = configureStore({
   reducer: {
      serchFilter: searchReducer,
      basketSlice: basketReducer
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
