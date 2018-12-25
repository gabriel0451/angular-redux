import { Component, OnInit } from '@angular/core';
import { State } from '../../core/store/app.states';
import { Store } from '@ngrx/store';
import * as roleReducer from '../../core/store/reducers/security/role.reducer';
import * as fromActions from '../../core/store/actions/security/common.action';

@Component({
  selector: 'app-role-personnel',
  template: `<app-data-management [state]="state" (queryData)="queryData($event)"></app-data-management>`
})

export class RoleComponent implements OnInit {
  state: State;

  queryData(e) {
    this.store.dispatch(new fromActions.QueryBegin('roles', e));
  }

  constructor(private store: Store<State>) {
    this.store.select(roleReducer.getRoles).subscribe(p => {
      this.state = p;
    });
  }

  ngOnInit() {
    this.store.dispatch(new fromActions.PageInitBegin('role'));
    this.store.dispatch(new fromActions.QueryBegin('roles', {}));
  }
}
