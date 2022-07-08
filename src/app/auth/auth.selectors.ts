import { createSelector } from "@ngrx/store";


//maper and only executes the code if the vaalue changed from previous state
export const isLoggedIn = createSelector(
  state => state["auth"],
  (auth) => !!auth.user
);
