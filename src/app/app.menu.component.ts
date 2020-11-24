import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
    <ul class="layout-menu layout-main-menu clearfix">
        <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
    </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboards', icon: 'pi pi-fw pi-home', routerLink: ['/dashboards'],
                items: [
                    {label: 'Generic', icon: 'pi pi-fw pi-home', routerLink: ['/dashboards/generic']},
                    {label: 'Banking', icon: 'pi pi-fw pi-money-bill', routerLink: ['/dashboards/dashboard_banking']},
                ]
            },
            {
                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
                ]
            },
            {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
                items: [
                    {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
                    {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
                    {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
                    {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
                    {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
                    {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
                    {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
                    {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
                    {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-clone', routerLink: ['/pages'],
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Landing Page', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login Page', icon: 'pi pi-fw pi-question-circle', routerLink: ['/login'], target: '_blank'},
                    {label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']},
                    {label: 'Wizard', icon: 'pi pi-fw pi-star', routerLink: ['/wizard']},
                    {label: 'Help Page', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']},
                    {label: 'Error Page', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error'], target: '_blank'},
                    {label: 'Not Found Page', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound'], target: '_blank'},
                    {label: 'Access Denied Page', icon: 'pi pi-fw pi-lock', routerLink: ['/accessdenied'], target: '_blank'},
                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-circle-off',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-circle-off'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-circle-off'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-circle-off',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-circle-off'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-circle-off'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Docs', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']}
        ];
    }
}
