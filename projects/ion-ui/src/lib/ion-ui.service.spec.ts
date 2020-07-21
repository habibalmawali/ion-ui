import { TestBed } from '@angular/core/testing';

import { IonUiService } from './ion-ui.service';

describe('IonUiService', () => {
  let service: IonUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
