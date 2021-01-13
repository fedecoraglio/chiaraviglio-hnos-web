import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ExchangeService {

  constructor(private http: Http) {

  }

  getLastExchageRange() {
    return this.http.get("https://free.currencyconverterapi.com/api/v6/convert?q=USD_ARS&compact=y&apiKey=80f5c0fb7d7ba49654dc");
    //return this.http.get("http://ws.geeklab.com.ar/dolar/get-dolar-json.php");
  }
}