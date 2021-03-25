import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassEntity } from '../models/classEntity.model';
import { Registration } from '../models/registration.model';
import { Registrations } from '../models/registrations.mode';
import { RegViewModel } from '../models/regViewModel';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';
import { ClassEntityService } from '../services/class-entity-service.service';
import { RegistrationService } from '../services/registration.service';
import { StudentService } from '../services/student-service.service';
import { TeacherService } from '../services/teacher-service.service';

@Component({
  selector: 'app-daily-attendance-home',
  templateUrl: './daily-attendance-home.component.html',
  styleUrls: ['./daily-attendance-home.component.scss']
})
export class DailyAttendanceHomeComponent implements OnInit {

  newRegistration: Registration;
  newRegistrations: Registrations;
  teachers: Teacher[] = [];
  classes: ClassEntity[] = [];
  students: Student[] = [];
  regViewModels: RegViewModel[] = [];

  constructor(
    private router: Router,
    private regService: RegistrationService,
    private teacherService: TeacherService,
    private classService: ClassEntityService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.newRegistration = new Registration();
    this.newRegistrations = new Registrations();
    this.getTeachersAsync();
    this.getClassesAsync();
    this.getStudents();
  }

  save() {

    this.buildRegistrations();

    this.regService.addRegistration(this.newRegistrations).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    }, err => {
      if (err.status === 500) {
        alert(err.message);
      }
    });
  }

  buildRegistrations() {
    this.regViewModels.forEach(p => {
      let reg = new Registration();
      reg.studentId = p.studentId;
      reg.attendanceDate = this.newRegistration.attendanceDate;
      reg.teacherId = this.newRegistration.teacherId;
      reg.attendanceStatusId = p.attendance;
      reg.grade = p.grade;
      reg.classId = this.newRegistration.classId;

      this.newRegistrations.collection.push(reg);
    });
  }

  getTeachersAsync() {
    this.teacherService.getAllAsync().subscribe(data => {
      this.teachers = data as Teacher[];
    });
  }

  getClassesAsync() {
    this.classService.getAllAsync().subscribe(data => {
      this.classes = data as ClassEntity[];
    });
  }

  getStudents() {
    this.studentService.getAllAsync().subscribe(data => {
      this.students = data as Student[];

      this.students.forEach(p => {
        this.regViewModels.push(
          new RegViewModel(p.id, p.name, p.surname, false, 0));
      });
    });
  }
}
