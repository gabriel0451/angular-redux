import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ShellService } from '../core/services/shell.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})

export class ShellComponent implements OnInit {
  menus: any;
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private shellService: ShellService) {
  }

  ngOnInit() {
    this.menus = this.shellService.menus;
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
