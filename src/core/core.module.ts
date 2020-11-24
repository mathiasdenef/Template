import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CoreConfigComponent } from './components/core-config/core-config.component';
import { CoreFooterComponent } from './components/core-footer/core-footer.component';
import { CoreMenuComponent } from './components/core-menu/core-menu.component';
import { CoreMenuitemComponent } from './components/core-menuitem/core-menuitem.component';
import { CoreProfileComponent } from './components/core-profile/core-profile.component';
import { CoreTopBarComponent } from './components/core-topbar/core-topbar.component';
import { MenuService } from './services/menu.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RadioButtonModule,
    InputSwitchModule,

  ],
  declarations: [
    CoreTopBarComponent,
    CoreFooterComponent,
    CoreConfigComponent,
    CoreMenuComponent,
    CoreMenuitemComponent,
    CoreProfileComponent,
  ],
  exports: [
    CoreTopBarComponent,
    CoreFooterComponent,
    CoreConfigComponent,
    CoreMenuComponent,
    CoreProfileComponent,
  ],
  providers: [
    MenuService,
  ]
})
export class CoreModule { }
