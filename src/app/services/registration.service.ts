import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreService } from '../services/store-service.service';
import { Registration } from '../models/registration.model';
import { Registrations } from '../models/registrations.mode';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = '';

  constructor(
    private http: HttpClient,
    private store: StoreService
  ) {
    this.apiUrl = this.store.GetAppUrl();
  }

  getAllAsync() {
    const url = `${this.apiUrl}/registration`;
    return this.http.get<Registration[]>(url);
  }

  addRegistration(args: Registrations) {
    const url = `${this.apiUrl}/Registration/PostNewRegistration`;

    return this.http.post(url, args);
  }
}
