import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassEntity } from 'src/app/models/classEntity.model';
import { ClassEntityService } from 'src/app/services/class-entity-service.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './class-home.component.html',
  styleUrls: ['./class-home.component.scss']
})
export class ClassHomeComponent implements OnInit {

  newClass: ClassEntity;

  constructor(
    private router: Router,
    private classService: ClassEntityService
  ) { }

  ngOnInit(): void {
    this.newClass = new ClassEntity();
  }

  save() {
    this.classService.addClass(this.newClass).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/maint/class-list']);
      }, 1000);

    }, err => {
      if (err.status === 500) {
        alert(err.message);
      }
    });
  }
}
