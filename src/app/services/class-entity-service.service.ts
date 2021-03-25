import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreService } from '../services/store-service.service';
import { ClassEntity } from '../models/classEntity.model';

@Injectable({
  providedIn: 'root'
})
export class ClassEntityService {

  private apiUrl = '';

  constructor(
    private http: HttpClient,
    private store: StoreService

  ) {
    this.apiUrl = this.store.GetAppUrl();
  }

  getAllAsync() {
    const url = `${this.apiUrl}/class`;
    return this.http.get<any[]>(url);
  }

  addClass(args: ClassEntity) {
    const url = `${this.apiUrl}/class/PostNewClass`;

    return this.http.post(url, args);
  }
}
