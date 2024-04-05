import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  // slider: SliderReducer,
  // page: PageReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
