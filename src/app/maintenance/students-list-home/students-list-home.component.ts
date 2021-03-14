import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list-home',
  templateUrl: './students-list-home.component.html',
  styleUrls: ['./students-list-home.component.scss']
})
export class StudentsListHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editClass() { }

  deleteClass() { }

  addNewStudent() {
    this.router.navigate(['maint/student']);
  }

}
