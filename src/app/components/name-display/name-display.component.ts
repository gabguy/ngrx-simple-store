import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Person } from '../../people/models/person.model';

@Component({
  selector: 'ns-name-display',
  templateUrl: 'name-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameDisplayComponent {
  @Input() people: Person[];
}
