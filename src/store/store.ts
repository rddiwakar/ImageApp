import { configureStore,combineReducers } from "@reduxjs/toolkit";
import ImageReducer from "./reducer";
import SelectedImageReducer from "./selectedReducer";
import HandleCheck from "./SelectforAdd/reduceradd";

const rootReducer = combineReducers({
    ImageReducer,
    SelectedImageReducer,
    HandleCheck
  })
const store = configureStore(
    {
        reducer: rootReducer
    }
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;