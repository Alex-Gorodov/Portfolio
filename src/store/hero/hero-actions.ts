import { createAction } from "@reduxjs/toolkit";

export const setLastLetterIndex = createAction<{index: number | null}>('hero/setLastLetterIndex')