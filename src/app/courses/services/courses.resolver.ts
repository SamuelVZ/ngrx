import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CourseEntityService } from './course-entity.service';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {

  constructor(private coursesService: CourseEntityService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    //first check if it is loaded by checking the observable loaded$ so it is going to load once
    return this.coursesService.loaded$.pipe(
      tap(loaded =>{
        if(!loaded){
          this.coursesService.getAll();
        }

      }),
      filter(loaded => !!loaded),
      first()
    );

    // return this.coursesService.getAll().pipe(
    //   map(courses => !!courses)
    // );

  }

}
