import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PutItemsService } from '../put-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.page.html',
  styleUrls: ['./tourlist.page.scss'],
})
export class TourlistPage implements OnInit, AfterViewInit {
  private tour: string[];
  private tour_desc: string[];
  constructor(private putItem: PutItemsService, private alert: AlertController) { }

  ngOnInit() {}
  ionViewWillEnter() {

  }
  ngAfterViewInit() {
    this.tour = this.putItem.getTour();
    this.tour_desc = this.putItem.getTourDesc();
    console.log(this.tour);
    console.log(this.tour_desc);
  }
  async view(num:number) {
    console.log('View tour info');
    console.log(this.tour_desc[num]);
    const alertbox = await this.alert.create({
      header: 'Tour information',
      message: 'Go to booking page?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {console.log('Cancel, stop viewing');}
        },
        {
          text: 'Proceed to Bookings',
          handler: () => {window.open(this.tour_desc[num], '_blank');}
        }
      ]
    });
    await alertbox.present();
  }
}
