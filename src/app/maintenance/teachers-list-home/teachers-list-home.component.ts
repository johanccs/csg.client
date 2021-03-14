import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers-list-home',
  templateUrl: './teachers-list-home.component.html',
  styleUrls: ['./teachers-list-home.component.scss']
})
export class TeachersListHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editClass() { }

  deleteClass() { }

  addNewTeacher() {
    this.router.navigate(['maint/teacher']);
  }

}
