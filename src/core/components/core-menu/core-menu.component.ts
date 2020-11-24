import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app/app.component';

@Component({
    selector: 'core-menu',
    template: `
    <ul class="layout-menu layout-main-menu clearfix">
        <li core-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
    </ul>
    `
})
export class CoreMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboards', icon: 'pi pi-fw pi-home', routerLink: ['/dashboards'],
                items: [
                    { label: 'Generic', icon: 'pi pi-fw pi-home', routerLink: ['/dashboards/generic'] },
                    { label: 'Banking', icon: 'pi pi-fw pi-money-bill', routerLink: ['/dashboards/dashboard_banking'] },
                ]
            },
        ];
    }
}
