import { Component, OnInit } from '@angular/core';
import { ServicesProductsService } from '../shared/servicesProducts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit { 

    servicesDataSection1: any = [];
    servicesDataSection2: any = [];
    servicesDataSection3: any = [];
    currentServicesSelected: any = null;

    constructor(
        private servicesProductsService: ServicesProductsService,
        private activatedRoute: ActivatedRoute) {
        
    }

    ngOnInit() {
        let servicesData = this.servicesProductsService.servicesData;
        this.servicesDataSection1.push(servicesData[0]);
        this.servicesDataSection1.push(servicesData[1]);
        this.servicesDataSection2.push(servicesData[3]);
        this.servicesDataSection2.push(servicesData[5]);
        this.servicesDataSection3.push(servicesData[2]);
        this.servicesDataSection3.push(servicesData[4]);

        /**this.currentServicesSelected = this.servicesData[0];
        if(this.activatedRoute.snapshot !== null && this.activatedRoute.snapshot !== undefined &&
            this.activatedRoute.snapshot.queryParams !== null && this.activatedRoute.snapshot.queryParams !== undefined &&
            this.activatedRoute.snapshot.queryParams.id !== null && 
            this.activatedRoute.snapshot.queryParams.id !== undefined) {
                let idSer = parseInt(this.activatedRoute.snapshot.queryParams.id);
                let index = this.servicesData.findIndex(item => item.id === idSer);
                if(index !== -1) {
                    this.currentServicesSelected = this.servicesData[index];
                }                
        }
        window.scrollTo(0, 0);**/
    }

    changeCurrentService(s: any) {
        this.currentServicesSelected = s;
    }
}