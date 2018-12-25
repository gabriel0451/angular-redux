import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../app.states';
import * as personnelReducer from '../reducers/security/personnel.reducer';
import * as roleReducer from '../reducers/security/role.reducer';
import { environment } from '../../../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  personnelState: personnelReducer.reducer,
  roleState: roleReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
