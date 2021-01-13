import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServicesProductsService } from '../shared/servicesProducts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit { 
    
    productsDataSection1: any = [];
    productsDataSection2: any = [];
    productsDataSection3: any = [];
    currentServicesSelected: any = null;

    constructor(private servicesProductsService: ServicesProductsService) {
        
    }

    ngOnInit() {
        let products = this.servicesProductsService.productsData;
        this.productsDataSection1.push(products[0]);
        this.productsDataSection1.push(products[1]);
        this.productsDataSection2.push(products[2]);
        this.productsDataSection2.push(products[3]);
        this.productsDataSection3.push(products[4]);
        this.productsDataSection3.push(products[5]);
    }
}