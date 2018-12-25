import { Component, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../../../core/store/app.states';

@Component({
  selector: 'app-data-management',
  template: `<nz-card nzTitle="{{state.common.title}}">
    <app-query-panel [queryPanel]="state.uiState.queryPanel" [isLoading]="state.common.isLoading"
    (search)="search($event)"></app-query-panel>
    <app-data-table-panel [dataTablePanelModel]="state.uiState.dataTablePanel" [(displayData)]="state.domainData"></app-data-table-panel>
</nz-card>`,
})

export class DataManagementComponent {
  @Input() state: State;
  @Output() queryData = new EventEmitter<{}>();

  search(e) {
    this.queryData.emit(e);
  }
}
