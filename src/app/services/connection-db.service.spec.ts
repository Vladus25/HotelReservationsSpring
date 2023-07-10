import { TestBed } from '@angular/core/testing';

import { ConnectionDBService } from './connection-db.service';

describe('ConnectionDBService', () => {
  let service: ConnectionDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
