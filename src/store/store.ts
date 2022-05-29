import { configureStore,combineReducers } from "@reduxjs/toolkit";
import ImageReducer from "./reducer";
import SelectedImageReducer from "./selectedReducer";
import ReducerAdd from "./SelectforAdd/reduceradd";
const rootReducer = combineReducers({
    ImageReducer,
    SelectedImageReducer,
    ReducerAdd
  })
const store = configureStore(
    {
        reducer: rootReducer
    }
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;