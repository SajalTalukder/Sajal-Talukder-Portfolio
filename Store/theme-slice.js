import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { isDark: false },
  reducers: {
    darkMode: (state) => {
      state.isDark = true;
    },
    lightMode: (state) => {
      state.isDark = false;
    },
  },
});

export const themeAction = themeSlice.actions;
export default themeSlice.reducer;
