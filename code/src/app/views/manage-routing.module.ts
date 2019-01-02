import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './security/personnel.component';
import { PersonnelDetailComponent } from './security/details/personnel-detail.component';
import { RoleComponent } from './security/role.component';

export const routes: Routes = [
  {
    path: 'security',
    children: [
      {
        path: 'personnel', component: PersonnelComponent, data: { breadcrumb: '人员管理' },
        children: [
          { path: 'detail/:id', component: PersonnelDetailComponent, data: { breadcrumb: '人员详情' } },
        ]
      },
      { path: 'role', component: RoleComponent, data: { breadcrumb: '角色管理' } }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class ManageRoutingModule { }
