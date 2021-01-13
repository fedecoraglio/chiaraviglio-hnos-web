import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';

declare var FB;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  facebookPostData: any = [];
  lastFacebookResponse: any = {};
  isLoading: boolean = false;
  showSpinnerPagination: boolean = false;
  showError: boolean = false;
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private http: Http) {      
  }

  ngOnInit() {
    this.loadFacebookData();
  }

  showMoreFacebookPost() {
    this.showSpinnerPagination = true;
    if(this.lastFacebookResponse.next !== null && 
        this.lastFacebookResponse.next !== undefined) {
      this.makeCallToApiPost(this.lastFacebookResponse.next, false);
    } else {
      this.showSpinnerPagination = false;
    }    
  }

  private loadFacebookData() {
    this.isLoading = true;
    this.http.get("https://graph.facebook.com/v3.0/10214414935000195/accounts?access_token=EAAdMmWGZAjUMBAEboEwNeQIZCivewJKYKEOyzL2ZC7ZCwyADzAmQdVLYJYyOTvkSZByayE5CiZC8DTZAfaDaQHHYkeZCnddZCbxA7FIbJRHG9MIZBHshshuZC2QxF8xQtrFBTu4YUZCObla72RdrUJARzXFofxud8lueBo7NZAbM5Qzr0xwZDZD")
      .subscribe(
        resp => {
          let dataLogin = resp.json();
          this.loadFacebookPost(dataLogin.data);
        },
        err => {
          console.error(err);          
          this.isLoading = false;
          this.showError = true;
          this.changeDetectorRef.detectChanges();
        }
    );      
  }

  private loadFacebookPost(dataFromAccount) {
    let idx = dataFromAccount.findIndex(item => parseInt(item.id) === 186072878604195);
    if(idx !== -1) {
      let page = dataFromAccount[idx];      
      this.makeCallToApiPost(`https://graph.facebook.com/v3.0/186072878604195?fields=posts{full_picture,link,message,created_time}&access_token=${page.access_token}`, true);
    } else {
      this.isLoading = false;
      this.showError = true;
      this.changeDetectorRef.detectChanges();
    }
  }

  private makeCallToApiPost(url, shouldShowError) {
    this.http.get(url).subscribe(
      resp => {
        let respData = resp.json();
        let data = [];
        if(respData.posts !== null && respData.posts !== undefined) {
          data = respData.posts.data;
          this.lastFacebookResponse = respData.posts.paging;
        } else if(respData.data !== null && respData.data !== undefined) {
          data = respData.data;
          this.lastFacebookResponse = respData.paging;
        }
        for(let r of data) {
          if(r.full_picture !== null && r.full_picture !== undefined) {
            this.facebookPostData.push(r);
          }
        }        
        this.isLoading = false;
        this.showSpinnerPagination = false;
        this.changeDetectorRef.detectChanges();
      },
      err => {
        console.error(err);
        this.isLoading = false;
        this.showSpinnerPagination = false;
        this.showError = shouldShowError;
        this.changeDetectorRef.detectChanges();
      }
    );
  }  
}