import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./slices/CartSlice";
import UserSliceReducer from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    CartSlice: CartSliceReducer,
    userSlice: UserSliceReducer,
  }
});
