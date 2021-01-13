import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';

export const router: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: HomeComponent},
    { path: 'quienes-somos', component: AboutUsComponent},
    { path: 'servicios', component: ServicesComponent},
    { path: 'productos', component: ProductsComponent},
    { path: 'noticias', component: NewsComponent},
];

export const RoutesAppModule: ModuleWithProviders = RouterModule.forRoot(router, { useHash: false})