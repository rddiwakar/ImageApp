import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "./reducer";
const store = configureStore(
    {
        reducer: ImageReducer
    }
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;