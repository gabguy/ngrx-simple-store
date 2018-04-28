import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from './people/models/person.model';

import { AddPerson } from './people/actions';

import { getPeople } from './reducers';
import * as people from './people/reducers/people.reducer';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people$: Observable<Person[]>;

  constructor(private store: Store<people.State>) {
    this.people$ = store.pipe(select(getPeople));
  }

  addPerson(person: Person) {
    this.store.dispatch(new AddPerson(person));
  }
}
