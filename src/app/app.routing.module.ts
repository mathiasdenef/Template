import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




@NgModule({
    imports: [
        RouterModule.forRoot([
            // {
            //     path: '', component: AppMainComponent,
            // },

        ], { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
