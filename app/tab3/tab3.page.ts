import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PutItemsService } from '../put-items.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Items: string[] = [];
  tours: string[] = [];
  tours_desc: string[] = [];
  constructor(private putItem: PutItemsService, private http: HTTP, private router: Router, private alertC: AlertController) {}

  ngOnInit(){
    this.Items = this.putItem.getPlaces();
  }
  delete(item){
    console.log('remove '+item);
    (this.Items).splice(this.Items.indexOf(item), 1);
  }
  getTours(item) {
    let id = '';
    if(item.includes(' ')) {
      let name = item.split(' ');
      let name2 = '';
      for(var i = 1; i<name.length; i++) {
        name2+='_'+name[i];
      }
      id=name[0]+name2;
    } else {
      id = item;
    }
    console.log('city id = '+ id);
    let output = [];
    let output2 = [];
    this.http.get('https://www.triposo.com/api/20200405/tour.json?location_ids='+id+'&account=<YOUR ACCOUNT ID>&token=<YOUR API TOKEN>', {}, {})
    .then(data => {
      //console.log('data fetched');
      console.log(data.data);
      let dat = JSON.parse(data.data);
      console.log('data 0 = '+dat.results[0].name);
      for(var i=0; i<dat.results.length; i++){
        output.push(dat.results[i].name+' - Price: '+dat.results[i].price.amount+' '+dat.results[i].price.currency);
        output2.push(dat.results[i].vendor_tour_url);
      }
      this.tours = output;
      this.tours_desc = output2;
      console.log(this.tours.length);
      //set the tour array and tour_desc in the putItem service
      this.putItem.setTour(this.tours);
      this.putItem.setTourDesc(this.tours_desc);
    }).catch(error => {
      console.log(error.error);
    });
  }
  async view_tours(item) {
    console.log('User wants to see available tours.');
    this.getTours(item);
    const addAlert = await this.alertC.create({
      header: 'See tour?',
      message: 'Click "Go" to Continue to tour page...',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Go',
          handler: () => {
            this.router.navigate(['/tourlist']);
          }
        }
      ]
    });
    await addAlert.present();
  }
}
