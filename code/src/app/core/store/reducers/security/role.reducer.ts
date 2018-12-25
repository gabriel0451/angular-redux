import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../../actions/security/common.action';
import { KeyValueItem } from '../../../models/common.model';
import { State } from '../../app.states';
import { Utils } from '../../../../utils';

export const initialState: State = {
  common: {
    title: '角色管理',
    isLoading: false
  },
  domainData: [],
  uiState: {
    queryPanel: {
      title: '角色查询',
      queryItems: [{
        title: '角色编号',
        columnName: 'code',
        type: 'text',
        show: true,
      }, {
        title: '角色名称',
        columnName: 'name',
        type: 'text',
        show: true
      }, {
        title: '状态',
        columnName: 'status',
        type: 'select',
        show: true,
        keyValueItems: Utils.convertToKeyValueSource('Status')
      }, {
        title: '是否管理员',
        columnName: 'isAdmin',
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
        dataIndex: 'code',
        title: '角色编号',
      }, {
        dataIndex: 'name',
        title: '角色名称',
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
        url: '/manage/security/role-detail',
        icon: 'anticon anticon-eye',
        disabled: true
      }, {
        text: '修改',
        url: '',
        icon: 'anticon anticon-edit',
        disabled: true
      }],
      pageSize: 10
    }
  }
};

export const reducer = (state = initialState, action: fromActions.All): State => {
  switch (action.type) {
    case fromActions.CommonActionTypes.QUERY_BEGIN: {
      state.common.isLoading = true;
      return state;
    }
    case fromActions.CommonActionTypes.QUERY_SUCCESS: {
      state.common.isLoading = false;
      state.domainData = action.data;
      return state;
    }
    case fromActions.CommonActionTypes.QUERY_FAIL: {
      state.common.isLoading = false;
      return state;
    }
    case fromActions.CommonActionTypes.PAGE_INIT_SUCCESS: {
      state.uiState.queryPanel.queryItems.find(p => p.columnName === 'isAdmin').keyValueItems = action.data;
      return state;
    }
    case fromActions.CommonActionTypes.PAGE_INIT_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const getRoleState = createFeatureSelector<State>('roleState');

export const getRoles = createSelector(
  getRoleState,
  (state: State) => state
);
