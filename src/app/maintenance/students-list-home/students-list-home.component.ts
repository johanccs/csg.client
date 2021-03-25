import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-students-list-home',
  templateUrl: './students-list-home.component.html',
  styleUrls: ['./students-list-home.component.scss']
})
export class StudentsListHomeComponent implements OnInit {

  studentArray: Student[] = [];

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getAllAsync();
  }

  editClass() { }

  deleteClass() { }

  addNewStudent() {
    this.router.navigate(['maint/student']);
  }

  getAllAsync() {
    this.studentService.getAllAsync().subscribe(data => {
      this.studentArray = data as Student[];
    });
  }
}
