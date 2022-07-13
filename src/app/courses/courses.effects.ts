import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(
    () => this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(action => this.coursesService.findAllCourses()), //send one request at the time to the backend (mergemap for multiple request)
      map(courses => CourseActions.allCoursesLoaded({courses}))
      )

  );

  saveCourse$ = createEffect(
    () => this.actions$.pipe(
      ofType(CourseActions.courseUpdated),
      concatMap(action => this.coursesService.saveCourse(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesHttpService
    ){

  }

}
