import { configureStore,combineReducers } from "@reduxjs/toolkit";
import ImageReducer from "./Reducers/reducer";
import SelectedImageReducer from "./Reducers/selectedReducer";
import HandleCheck from "./Reducers/reduceradd";
import {SelectPageImageReducer } from "./Reducers/SelectImageReducer"
const rootReducer = combineReducers({
    ImageReducer,
    SelectedImageReducer,
    HandleCheck,
    SelectPageImageReducer
  })
const store = configureStore(
    {
        reducer: rootReducer
    }
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;