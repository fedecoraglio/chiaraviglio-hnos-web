import { Component, OnInit } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { Http } from '@angular/http';
import { ExchangeService } from '../shared/exchange.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  private emailUrl = '/assets/email.php';
  contactData: any;
  submitted: boolean;
  showMessageSuccess: boolean;
  showMessageError: boolean;
  today: Date;
  exchangeData: any = {};

  constructor(
    private http: Http,
    private exchangeService: ExchangeService) {

  }

  ngOnInit() {
    this.today = new Date();
    this.showMessageSuccess = false;
    this.showMessageError = false;
    this.submitted = false;
    this.contactData = {
      name: null,
      email: null,
      phone: null,
      message: null
    }
    this.exchangeService.getLastExchageRange().subscribe(
      resp => {
        const data = resp.json();
        let exchangeValue = 'N/C';
        if(data.USD_ARS.val) {
          exchangeValue = data.USD_ARS.val.toFixed(2).toString().replace('.', ',');
        }
        this.exchangeData = {
          exchange: exchangeValue
        }
      },
      err => {
        this.exchangeData = {
          exchange: "N/C"
        }
      }
    );
  }

  sendMessage() {
    if (!this.shouldDisabledButton()) {
      this.sendEmail();
    }
  }

  shouldDisabledButton() {
    return !this.contactData.name || !this.contactData.phone ||
      !this.contactData.message || !this.contactData.email;
  }

  private sendEmail() {
    this.showMessageSuccess = false;
    this.showMessageError = false;
    this.submitted = true;
    return this.http.post(this.emailUrl, {
      name: this.contactData.name,
      email: this.contactData.email,
      phone: this.contactData.phone,
      message: this.contactData.message,
    }).subscribe(
      resp => {
        console.info(resp);
        console.info("Los datos se enviaron con exito.");
        this.showMessageSuccess = true;
        this.showMessageError = false;
        this.contactData = {
          name: null,
          email: null,
          phone: null,
          message: null
        }
        setTimeout(() => {
          this.showMessageError = false;
          this.showMessageSuccess = false;
          this.submitted = false;
        }, 5000);
      },
      error => {
        console.error(error);
        this.showMessageSuccess = false;
        this.showMessageError = true;
        this.submitted = false;
      }
    );
  }
}