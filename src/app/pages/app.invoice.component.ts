import {Component} from '@angular/core';

@Component({
    selector: 'app-invoice',
    templateUrl: './app.invoice.component.html',
})
export class AppInvoiceComponent {

    print() {
        window.print();
    }
}
