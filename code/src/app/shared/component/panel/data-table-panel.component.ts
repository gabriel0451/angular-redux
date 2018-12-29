import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableItemGroup } from '../../../core/models/common.model';

@Component({
  selector: 'app-data-table-panel',
  templateUrl: './data-table-panel.component.html'
})
export class DataTablePanelComponent implements OnInit {
  @Input() dataTablePanelModel: DataTableItemGroup;
  @Input() displayData: any;

  constructor(private router: Router) {
  }

  onClick(id: string, url: string) {
    if (url) {
      this.router.navigate([url, id]);
    }
  }

  ngOnInit() {
    console.log(this.displayData);
  }
}
