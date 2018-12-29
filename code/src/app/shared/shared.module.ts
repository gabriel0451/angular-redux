import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// #region 第三方库
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import { SecurityScanOutline, MenuFoldOutline, MenuUnfoldOutline, UserOutline, TeamOutline } from '@ant-design/icons-angular/icons';

// 图标
const icons: IconDefinition[] = [
  SecurityScanOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
  TeamOutline
];

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
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_ICONS, useValue: icons }
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
