import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { RoutesAppModule } from './app.router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ServicesProductsService } from './shared/servicesProducts.service';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { ExchangeService } from './shared/exchange.service';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBodyComponent,
    FooterComponent,
    CarouselImageComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ProductsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesAppModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [
    ServicesProductsService,
    ExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
