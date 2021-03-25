import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher-service.service';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-teachers-list-home',
  templateUrl: './teachers-list-home.component.html',
  styleUrls: ['./teachers-list-home.component.scss']
})
export class TeachersListHomeComponent implements OnInit {

  teacherArray: Teacher[] = [];

  constructor(
    private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getAllAsync();
  }

  editClass() { }

  deleteClass() { }

  addNewTeacher() {
    this.router.navigate(['maint/teacher']);
  }

  getAllAsync() {
    this.teacherService.getAllAsync().subscribe(data => {
      this.teacherArray = data as Teacher[];
    });
  }

}
