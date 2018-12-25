import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// #region 第三方库
import { NgZorroAntdModule } from 'ng-zorro-antd';

const THIRDMODULES = [
  NgZorroAntdModule,
];
// #endregion

// #region 自定义组件
import { QueryPanelComponent } from './component/panel/query-panel.component';
import { DataTablePanelComponent } from './component/panel/data-table-panel.component';
import { DataManagementComponent } from './component/viewBase/data-management.component';

const COMPONENTS = [
  QueryPanelComponent,
  DataTablePanelComponent,
  DataManagementComponent
];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    THIRDMODULES
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    THIRDMODULES,
    COMPONENTS
  ]
})
export class SharedModule { }
