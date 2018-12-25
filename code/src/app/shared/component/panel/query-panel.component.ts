import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { QueryItemGroup } from '../../../core/models/common.model';

@Component({
  selector: 'app-query-panel',
  templateUrl: './query-panel.component.html'
})
export class QueryPanelComponent implements OnInit {
  @Input() isLoading = false;
  @Input() queryPanel: QueryItemGroup;
  @Output() search = new EventEmitter<{}>();
  queryPanelForm: FormGroup;
  isCollapse = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.queryPanelForm = this.fb.group({});
    this.queryPanel.queryItems.forEach(element => {
      this.queryPanelForm.addControl(element.columnName, new FormControl());
    });
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.queryPanel.queryItems.forEach((item, index) => {
      item.show = this.isCollapse ? (index < 4) : true;
    });
  }

  resetForm(): void {
    this.queryPanelForm.reset();
  }

  onSearch(): void {
    this.search.emit(this.queryPanelForm.value);
  }
}
