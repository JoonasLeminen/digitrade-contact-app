import { TestBed } from '@angular/core/testing';

import { ToolbarServiceService } from './toolbar-service.service';

describe('ToolbarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbarServiceService = TestBed.get(ToolbarServiceService);
    expect(service).toBeTruthy();
  });
});
