import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ToolbarOptions} from '../ui/toolbar/toolbar-options';

@Injectable({
  providedIn: 'root'
})
export class ToolbarServiceService {
  toolbarOptions: BehaviorSubject<ToolbarOptions>;

  constructor() {
    this.toolbarOptions = new BehaviorSubject<ToolbarOptions>(
      new ToolbarOptions(false, 'Digitrade, kesäkoulu 2019 - Contacts app', []));
  }

  getToolbarOptions(): Observable<ToolbarOptions> {
    return this.toolbarOptions.asObservable();
}

  setToolbarOptions(options: ToolbarOptions): void {
    this.toolbarOptions.next(options);
}
}
