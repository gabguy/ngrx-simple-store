import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Person } from '../../people/models/person.model';

@Component({
  selector: 'ns-name-form',
  templateUrl: 'name-form.component.html'
})
export class NameFormComponent implements OnInit {
  nameForm: FormGroup;
  @Output() save: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
    this.nameForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

  ngOnInit() { }

  submitForm() {
    if(!this.nameForm.valid) {
      return;
    }
    this.save.emit(this.nameForm.value);
    this.nameForm.reset();
  }
}
