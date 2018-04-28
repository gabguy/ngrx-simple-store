import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as people from '../people/reducers/people.reducer';

export interface State {
  people: people.State;
}

export const reducers: ActionReducerMap<State> = {
  people: people.reducer
};

export const getPeopleState = createFeatureSelector<people.State>('people');

export const getPeople = createSelector(getPeopleState, people.getPeople);
