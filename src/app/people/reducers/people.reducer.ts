import { PeopleAction, PeopleActionType } from '../actions';
import { Person } from '../models/person.model';

export interface State {
  people: Person[];
}

const initialState: State = {
  people: []
};

export function reducer(state: State = initialState, action: PeopleAction): State {
  switch(action.type) {
    case PeopleActionType.ADD_PERSON:
      return {
        people: [...state.people, action.payload]
      };
    default:
      return state;
  }
}

export const getPeople = (state: State) => state.people;
