import { Component } from '@angular/core';
import { ExchangeService } from './shared/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  today: Date;
  exchangeData: any = {};

  constructor(private exchangeService: ExchangeService) {
      this.today = new Date();
  }  

  ngOnInit() {
    this.exchangeService.getLastExchageRange().subscribe(
      resp => {
        const data = resp.json();
        let exchangeValue = 'N/C';
        if(data.USD_ARS.val) {
          exchangeValue = data.USD_ARS.val.toFixed(2).toString().replace('.', ',');
        }
        this.exchangeData = {
          exchange: `$${exchangeValue}`
        }
      },
      err => {
        console.error(err);
        this.exchangeData = { exchange: 'N/C'}
      }
    );
  }
}
