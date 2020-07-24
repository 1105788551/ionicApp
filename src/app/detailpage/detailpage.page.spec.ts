import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailpagePage } from './detailpage.page';

describe('DetailpagePage', () => {
  let component: DetailpagePage;
  let fixture: ComponentFixture<DetailpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
