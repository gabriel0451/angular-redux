import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ShellService } from '../core/services/shell.service';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.less']
})

export class ShellComponent implements OnInit {
    isCollapsed = false;
    triggerTemplate = null;
    @ViewChild('trigger') customTrigger: TemplateRef<void>;
    menus: any;
    user: any;
    constructor(private shellService: ShellService) {
        this.menus = this.shellService.menus;
    }

    ngOnInit() {
        this.user = {
            username: '管理员',
            initial: '管'
        };
    }

    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }

}
