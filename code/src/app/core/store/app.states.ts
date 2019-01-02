import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
export interface State {
  common: any;
  domainData: any;
  uiState: any;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface AppState {
  personnelState: State;
  roleState: State;
  router: RouterReducerState<RouterStateUrl>;
}
