import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManageRoutingModule } from './manage-routing.module';
import { PersonnelComponent } from './security/personnel.component';
import { PersonnelDetailComponent } from './security/details/personnel-detail.component';
import { RoleComponent } from './security/role.component';

@NgModule({
  imports: [
    SharedModule,
    ManageRoutingModule,
  ],
  declarations: [
    PersonnelComponent,
    PersonnelDetailComponent,
    RoleComponent
  ],
  exports: [
  ],
  entryComponents: [
  ],
})
export class ManageModule { }
