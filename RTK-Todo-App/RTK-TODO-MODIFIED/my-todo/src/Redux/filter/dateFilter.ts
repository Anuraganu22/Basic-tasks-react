import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum DateFilter {
  ShowAllDates = "SHOW_ALL_DATES",
  Showtoday = "SHOW_TODAY",
  Showyesterday = "SHOW_YESTERDAY",
  Showlastweek="SHOW_LAST_WEEK"
}

const initialState = DateFilter.ShowAllDates;
const DateFilterSlice = createSlice({
  name: 'DateFilter',
  initialState,
  reducers: {
    setDateFilter(state, action: PayloadAction<DateFilter>) {
      return action.payload;
    }
  }
});

export const { setDateFilter } = DateFilterSlice.actions;

export default DateFilterSlice.reducer;