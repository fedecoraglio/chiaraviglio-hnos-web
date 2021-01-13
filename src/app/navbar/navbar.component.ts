import { Component, ViewChild, OnInit } from '@angular/core';
import { ServicesProductsService } from '../shared/servicesProducts.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit { 

    productsData: any = [];
    toggleMenu: boolean = false;
    isCollapse: boolean = true;

    constructor(
        private servicesProductsService: ServicesProductsService, 
        private router: Router) {

    }

    ngOnInit() {
        this.productsData = this.servicesProductsService.productsData
    }
    
    goToProductsPage(prod) {
        this.router.navigate(['/productos'], { queryParams: { id: prod.id}});
        if(this.router.url.includes("productos")) {
            window.location.reload();
        }
    }

    onToggleMenu() {
        this.toggleMenu = !this.toggleMenu;
    }

}