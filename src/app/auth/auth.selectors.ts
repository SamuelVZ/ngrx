import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authenticate } from "../../../server/db-data";
import { AuthState } from "./reducers";

//feature selector to get autocompletition of the state variable
export const selectAuthState = createFeatureSelector<AuthState>("auth");


//maper and only executes the code if the vaalue changed from previous state
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);
