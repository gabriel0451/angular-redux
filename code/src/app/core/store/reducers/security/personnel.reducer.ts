import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as formActions from '../../actions/security/personnel.action';
import { KeyValueItem } from '../../../models/common.model';
import { State } from '../../app.states';
import { Utils } from '../../../../utils';

export const initialState: State = {
  common: {
    title: '人员管理',
    isLoading: false
  },
  domainData: [],
  uiState: {
    queryPanel: {
      title: '人员查询',
      queryItems: [{
        title: '人员姓名',
        columnName: 'name',
        type: 'text',
        show: true,
      }, {
        title: '人员电话',
        columnName: 'phone',
        type: 'text',
        show: true
      }, {
        title: '状态',
        columnName: 'status',
        type: 'select',
        show: true,
        keyValueItems: Utils.convertToKeyValueSource('Status')
      }, {
        title: '类型',
        columnName: 'type',
        type: 'select',
        show: true,
        keyValueItems: new Array<KeyValueItem>()
      }, {
        title: '创建时间',
        columnName: 'createTime',
        type: 'time',
      }, {
        title: '修改时间',
        columnName: 'modifyTime',
        type: 'time'
      }]
    },
    dataTablePanel: {
      columnItems: [{
        dataIndex: 'name',
        title: '人员姓名',
      }, {
        dataIndex: 'phone',
        title: '人员电话',
      }, {
        dataIndex: 'status',
        title: '状态',
      }, {
        dataIndex: 'createTime',
        title: '创建时间',
      }, {
        dataIndex: 'modifyTime',
        title: '修改时间',
      }],
      actions: [{
        text: '详情',
        url: '/manage/security/personnel/detail',
        icon: '',
        disabled: true
      }, {
        text: '修改',
        url: '',
        icon: '',
        disabled: true
      }],
      pageSize: 10
    }
  }
};

export function personenlReducer(state = initialState, action: formActions.All): State {
  switch (action.type) {
    case formActions.ActionTypes.QUERY_BEGIN: {
      state.common.isLoading = true;
      return state;
    }
    case formActions.ActionTypes.QUERY_SUCCESS: {
      state.common.isLoading = false;
      state.domainData = action.data;
      return state;
    }
    case formActions.ActionTypes.QUERY_FAIL: {
      state.common.isLoading = false;
      return state;
    }
    case formActions.ActionTypes.PAGE_INIT_SUCCESS: {
      state.uiState.queryPanel.queryItems.find(p => p.columnName === 'type').keyValueItems = action.data;
      return state;
    }
    case formActions.ActionTypes.PAGE_INIT_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const getPersonnelState = createFeatureSelector<State>('personnelState');

export const getPersonnels = createSelector(
  getPersonnelState,
  (state: State) => state
);
