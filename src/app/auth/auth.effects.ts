import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { login, logout } from "./auth.actions";

@Injectable()
export class AuthEffects {

  //createEffect manages error handling and there is no need to subscribe to it
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
      })
    ),
    {dispatch: false} //this is for the action required after talking the backend, always needed
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(action => {
        localStorage.removeItem('user');

        this.router.navigateByUrl('/login');
      })
    ),
    {dispatch: false}
  );

  constructor(private actions$: Actions,
    private router: Router){
    //old way implementation of effects

      // actions$.subscribe(action => {
      //   if(action.type == '[Login Page] user Login' ) {
      //     localStorage.setItem('user', JSON.stringify(action["user"]));
      //   }

      // });
  }

}
