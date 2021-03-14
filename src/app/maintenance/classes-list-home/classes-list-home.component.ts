import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes-list-home',
  templateUrl: './classes-list-home.component.html',
  styleUrls: ['./classes-list-home.component.scss']
})
export class ClassesListHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editClass() { }

  deleteClass() { }

  addNewClass() {
    this.router.navigate(['maint/class']);
  }

}
