import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../actions-types';
import { login } from '../auth.actions';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialState,
  //  on(AuthActions.login, (state, action) => {
  on(login, (state, action) => {
    return {
      user: action.user
    }
  })
);
