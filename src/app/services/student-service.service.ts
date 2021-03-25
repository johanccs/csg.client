import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreService } from '../services/store-service.service';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = '';

  constructor(
    private http: HttpClient,
    private store: StoreService
  ) {
    this.apiUrl = this.store.GetAppUrl();
  }
  getAllAsync() {
    const url = `${this.apiUrl}/student`;
    return this.http.get<Student[]>(url);
  }

  addStudent(args: Student) {
    const url = `${this.apiUrl}/student`;

    return this.http.post(url, args);
  }
}
