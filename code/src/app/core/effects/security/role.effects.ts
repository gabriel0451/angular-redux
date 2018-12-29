import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromActions from '../../store/actions/security/role.action';
import { map, switchMap } from 'rxjs/operators';
import { ShellService } from '../../services/shell.service';

@Injectable()

export class RoleEffects {
  constructor(private action$: Actions, private service: ShellService) { }
  @Effect()
  query: Observable<Action> = this.action$
    .pipe(ofType<fromActions.QueryBegin>(fromActions.ActionTypes.QUERY_BEGIN),
      switchMap(p => {
        return this.service.getTestDataByName(p.name).pipe(map(res => {
          return new fromActions.QuerySuccess(p.name, p.params, res);
        }));
      }));
  @Effect()
  init: Observable<Action> = this.action$
    .pipe(ofType<fromActions.PageInitBegin>(fromActions.ActionTypes.PAGE_INIT_BEGIN),
      map(p => {
        const result = [{
          key: 1,
          value: '是'
        }, {
          key: 0,
          value: '否'
        }];
        return new fromActions.PageInitSuccess(result);
      }));
}
