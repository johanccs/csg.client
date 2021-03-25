import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  newStudent: Student;

  constructor(
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.newStudent = new Student();
  }

  save() {
    this.studentService.addStudent(this.newStudent).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/maint/students-list']);
      }, 1000);

    }, err => {
      if (err.status === 500) {
        alert(err.message);
      }
    });
  }
}
