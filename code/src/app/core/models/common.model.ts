export interface QueryItemGroup {
  uniqueId: string;
  title: string;
  queryItems: Array<QueryItem>;
}

export interface QueryItem {
  uniqueId: number;
  title: string;
  columnName: string;
  value: string;
  type: string;
  show: boolean;
  keyValueItems: Array<KeyValueItem>;
}

export interface DataTableItemGroup {
  uniqueId: string;
  title: string;
  columnItems: Array<ColumnItem>;
  actions: Array<Action>;
}

export interface ColumnItem {
  dataIndex: string;
  title: string;
  type: string;
}

export interface Action {
  text: string;
  url: string;
  icon: string;
  disabled: boolean;
}

export interface KeyValueItem {
  key: string;
  value: string;
}
