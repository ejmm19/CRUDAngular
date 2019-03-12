import { TestBed } from '@angular/core/testing';

import { ClientBankService } from './client-bank.service';

describe('ClientBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientBankService = TestBed.get(ClientBankService);
    expect(service).toBeTruthy();
  });
});
