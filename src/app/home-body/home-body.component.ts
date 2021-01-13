import { Component, OnInit } from '@angular/core';
import { ServicesProductsService } from '../shared/servicesProducts.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-home-body',
    templateUrl: './home-body.component.html',
    styleUrls: ['./home-body.component.scss'],
})
export class HomeBodyComponent implements OnInit { 

    servicesDataSection1: any = [];
    servicesDataSection2: any = [];
    servicesDataSection3: any = [];

    constructor(
        private servicesProductsService: ServicesProductsService,
        private router: Router) {        
    }

    ngOnInit() {
        let data = this.servicesProductsService.servicesData;
        this.servicesDataSection1.push(data[0]);
        this.servicesDataSection1.push(data[1]);
        this.servicesDataSection2.push(data[2]);
        this.servicesDataSection2.push(data[3]);
        this.servicesDataSection3.push(data[4]);
        this.servicesDataSection3.push(data[5]);
    }

    test1 = false;

    test() {
        this.test1 = true;
        console.log("test");
    }

    goToServicePage(ser) {
        this.router.navigate(['/servicios'], { queryParams: { id: ser.id}});
    }
}