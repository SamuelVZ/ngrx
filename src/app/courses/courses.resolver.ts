import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { loadAllCourses } from "./course.actions";


@Injectable()
export class CoursesResolver implements Resolve<any>{

  loading = false;

  constructor(private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {



    return this.store.pipe(
      tap(() => {
        if(!this.loading){
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }

      }),
      first(), //waits for the observable to return a value
      finalize(() => {this.loading = false}) //when the observable completes it is going to set back the flag to false
    );
  }

}