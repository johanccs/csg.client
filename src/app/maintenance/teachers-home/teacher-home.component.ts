import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {

  newTeacher: Teacher;

  constructor(
    private router: Router,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.newTeacher = new Teacher();
  }

  save() {
    this.teacherService.addTeacher(this.newTeacher).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/maint/teachers-list']);
      }, 1000);

    }, err => {
      if (err.status === 500) {
        alert(err.message);
      }
    });
  }
}
