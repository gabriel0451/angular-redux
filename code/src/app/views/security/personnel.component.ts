import { Component, OnInit } from '@angular/core';
import { State } from '../../core/store/app.states';
import { Store } from '@ngrx/store';
import * as personnelReducer from '../../core/store/reducers/security/personnel.reducer';
import * as fromActions from '../../core/store/actions/security/personnel.action';

@Component({
  selector: 'app-security-personnel',
  template: `<app-data-management [state]="state" (queryData)="queryData($event)"></app-data-management>`
})

export class PersonnelComponent implements OnInit {
  state: State;

  queryData(e) {
    this.store.dispatch(new fromActions.QueryBegin('personnels', e));
  }

  constructor(private store: Store<State>) {
    this.store.select(personnelReducer.getPersonnels).subscribe(p => {
      this.state = p;
    });
  }

  ngOnInit() {
    this.store.dispatch(new fromActions.PageInitBegin('personnel'));
  }
}
