import { createReducer } from "@reduxjs/toolkit"
import { HeroState } from "../../types/state"
import { setLastLetterIndex } from "./hero-actions"

const initialState: HeroState = {
  lastIndex: null,
}

export const HeroReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLastLetterIndex, (state, action) => {
      const {index} = action.payload;
      state.lastIndex = index;
    })
})
