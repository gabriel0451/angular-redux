import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromActions from '../store/actions/security/common.action';
import { map, switchMap } from 'rxjs/operators';
import { ShellService } from '../services/shell.service';

@Injectable()

export class CommonEffects {
  constructor(private action$: Actions, private service: ShellService) { }
  @Effect()
  query: Observable<Action> = this.action$
    .pipe(ofType<fromActions.QueryBegin>(fromActions.CommonActionTypes.QUERY_BEGIN),
      switchMap(p => {
        return this.service.getAll(p.name).pipe(map(res => {
          return new fromActions.QuerySuccess(p.name, p.params, res);
        }));
      }));
  @Effect()
  init: Observable<Action> = this.action$
    .pipe(ofType<fromActions.PageInitBegin>(fromActions.CommonActionTypes.PAGE_INIT_BEGIN),
      map(p => {
        let result = [];
        if (p.name === 'personnel') {
          result = [{
            key: 1,
            value: '类型1'
          }, {
            key: 2,
            value: '类型2'
          }];
        } else {
          result = [{
            key: 1,
            value: '是'
          }, {
            key: 0,
            value: '否'
          }];
        }
        return new fromActions.PageInitSuccess(result);
      }));
}
