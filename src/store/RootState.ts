import { combineReducers } from "@reduxjs/toolkit";
import { HeroReducer } from "./hero/hero-reducer";

export const rootReducer = combineReducers({
  hero: HeroReducer
})

export type RootState = ReturnType<typeof rootReducer>;
