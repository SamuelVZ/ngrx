import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducers";
import * as fromCourses from "./courses.reducers"


export const selectCourses = createFeatureSelector<CoursesState>("courses");


export const selectAllCourses = createSelector(
  selectCourses,
  fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category == 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category == 'ADVANCED')
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCourses,
  state => state.allCoursesLoaded
);
