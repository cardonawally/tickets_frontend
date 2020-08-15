import { TestBed } from '@angular/core/testing';

import { TicketsService } from './tickets.service';
import {HttpClientModule} from "@angular/common/http";

describe('TicketsService', () => {
  let service: TicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsService);
    HttpClientModule
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
