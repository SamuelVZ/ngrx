import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction( "[Login Page] user Login", props<{user: User}>() );


export const logout = createAction("[navbar menu] Logout");
