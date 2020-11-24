import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';

@Component({
    templateUrl: './dashboardbanking.component.html'
})
export class DashboardBankingComponent implements OnInit {

    products: Product[];

    cols: any[];

    selectedCar: any;

    dropdownItem: SelectItem[];

    selectedDropdownItem: any;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);


        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.dropdownItem = [];
        this.dropdownItem.push({label: 'Select One', value: null});
        this.dropdownItem.push({label: 'Xbox One', value: {id: 1, name: 'Xbox One', code: 'XO'}});
        this.dropdownItem.push({label: 'PS4', value: {id: 2, name: 'PS4', code: 'PS4'}});
        this.dropdownItem.push({label: 'Wii U', value: {id: 3, name: 'Wii U', code: 'WU'}});
    }
}
