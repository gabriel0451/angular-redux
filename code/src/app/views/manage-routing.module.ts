import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './security/personnel.component';
import { PersonnelDetailComponent } from './security/details/personnel-detail.component';
import { RoleComponent } from './security/role.component';

export const routes: Routes = [
  {
    path: 'security',
    children: [
      { path: 'personnel', component: PersonnelComponent },
      { path: 'personnel-detail/:id', component: PersonnelDetailComponent },
      { path: 'role', component: RoleComponent }
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
