import { Action } from '@ngrx/store';
import { Person } from '../models/person.model';

export enum PeopleActionType {
  ADD_PERSON = '[People] Add new person'
}

export class AddPerson implements Action {
  readonly type = PeopleActionType.ADD_PERSON;

  constructor(public payload: Person) { }
}

export type PeopleAction = AddPerson;
