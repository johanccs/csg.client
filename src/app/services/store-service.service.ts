import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private debugApiUrl = 'http://localhost:5000/api';

  constructor() { }

  public GetAppUrl() {
    // return of(this.apiUrl);
    return this.debugApiUrl;
  }
}
