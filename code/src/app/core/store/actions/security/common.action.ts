import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  QUERY_BEGIN = 'QUERY_BEGIN',
  QUERY_SUCCESS = 'QUERY_SUCCESS',
  QUERY_FAIL = 'QUERY_FAIL',

  PAGE_INIT_BEGIN = 'PAGE_INIT_BEGIN',
  PAGE_INIT_SUCCESS = 'PAGE_INIT_SUCCESS',
  PAGE_INIT_FAIL = 'PAGE_INIT_FAIL'
}

export class QueryBegin implements Action {
  readonly type = CommonActionTypes.QUERY_BEGIN;
  constructor(public name: string, public params: any) { }
}

export class QuerySuccess implements Action {
  readonly type = CommonActionTypes.QUERY_SUCCESS;
  constructor(public name: string, public params: any, public data: any) { }
}

export class QueryFail implements Action {
  readonly type = CommonActionTypes.QUERY_FAIL;
  constructor(public name: string, public params: any, public message: string) { }
}

export class PageInitBegin implements Action {
  readonly type = CommonActionTypes.PAGE_INIT_BEGIN;
  constructor(public name: string) { }
}

export class PageInitSuccess implements Action {
  readonly type = CommonActionTypes.PAGE_INIT_SUCCESS;
  constructor(public data: any) { }
}

export class PageInitFail implements Action {
  readonly type = CommonActionTypes.PAGE_INIT_FAIL;
  constructor(public message: string) { }
}

export type All =
  QueryBegin |
  QuerySuccess |
  QueryFail |
  PageInitBegin |
  PageInitSuccess |
  PageInitFail;
