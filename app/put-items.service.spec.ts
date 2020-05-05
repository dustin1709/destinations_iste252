import { TestBed } from '@angular/core/testing';

import { PutItemsService } from './put-items.service';

describe('PutItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutItemsService = TestBed.get(PutItemsService);
    expect(service).toBeTruthy();
  });
});
