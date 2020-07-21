import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonUiComponent } from './ion-ui.component';

describe('IonUiComponent', () => {
  let component: IonUiComponent;
  let fixture: ComponentFixture<IonUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
