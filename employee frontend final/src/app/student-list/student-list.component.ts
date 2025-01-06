import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import{FormsModule} from '@angular/forms'

import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students: Student[];
  EnteredID!:number;

  constructor(private studentService: StudentService,  private router: Router) {
    this.students=[];
   
   }

  ngOnInit(): void {

    
    this.getStudents();
  }


  goToStudent(){

    
    console.log(this.EnteredID); 
    this.router.navigate(['details-of-student',this.EnteredID]);
  }

  getStudents(){
    this.studentService.getStudentsList().subscribe(data => {this.students = data;});

    
  }

  updateStudent(id: number){
    this.router.navigate(['updating-by-id', id]);
  }




  deleteStudent(id: number){

    if(confirm("Are you sure to delete Student ID: "+id)){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })}
  }
 

  detailsOfStudent(id: number){
    this.router.navigate(['details-of-student', id]);
  }

  
}
