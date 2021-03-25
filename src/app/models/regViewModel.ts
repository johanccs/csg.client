export class RegViewModel{
  studentId: string;
  name: string;
  surname: string;
  dateRegistered: Date;
  attendance: boolean;
  grade: number;

  constructor(studentId: string, name: string, surname: string, attendance: boolean, grade: number) {
    this.studentId = studentId;
    this.name = name;
    this.surname = surname;
    this.attendance = attendance;
    this.grade = grade;
  }
}
