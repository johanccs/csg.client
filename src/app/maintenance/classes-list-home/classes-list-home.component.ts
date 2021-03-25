import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassEntity } from 'src/app/models/classEntity.model';
import { ClassEntityService } from 'src/app/services/class-entity-service.service';
@Component({
  selector: 'app-classes-list-home',
  templateUrl: './classes-list-home.component.html',
  styleUrls: ['./classes-list-home.component.scss']
})
export class ClassesListHomeComponent implements OnInit {

  constructor(private router: Router,
              private classService: ClassEntityService) { }

  classArray: ClassEntity[] = [];

  ngOnInit(): void {
    this.getAllAsync();
  }

  editClass() { }

  deleteClass() { }

  addNewClass() {
    this.router.navigate(['maint/class']);
  }

  getAllAsync() {
    this.classService.getAllAsync().subscribe(data => {
      this.classArray = data as ClassEntity[];
    });
  }

}
