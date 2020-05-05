import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourlistPage } from './tourlist.page';

describe('TourlistPage', () => {
  let component: TourlistPage;
  let fixture: ComponentFixture<TourlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
