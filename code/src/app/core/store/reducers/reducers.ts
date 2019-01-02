import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState, RouterStateUrl } from '../app.states';
import * as personnelReducer from '../reducers/security/personnel.reducer';
import * as roleReducer from '../reducers/security/role.reducer';
import { environment } from '../../../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
  personnelState: personnelReducer.personenlReducer,
  roleState: roleReducer.roleReducer,
  router: routerReducer
};

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;
    return { url, params, queryParams };
  }
}

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
