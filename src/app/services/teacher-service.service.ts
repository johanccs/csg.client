import { Injectable } from '@angular/core';
import { StoreService } from '../services/store-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from 'src/app/models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = '';

  constructor(
    private http: HttpClient,
    private store: StoreService
  ) {
    this.apiUrl = this.store.GetAppUrl();
  }

  getAllAsync() {
    const url = `${this.apiUrl}/teacher`;
    return this.http.get<any[]>(url);
  }

  addTeacher(args: Teacher) {
    const url = `${this.apiUrl}/teacher/PostNewTeacher`;

    return this.http.post(url, args);
  }
}
