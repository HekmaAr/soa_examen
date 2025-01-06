import { Component } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {


  
  


    id: number;
  student: Student = new Student();
  
  
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.id=0
    }
    //loading the data into form 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
 
 
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe( data =>{
      this.goToStudentList();
    }
    , error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/show-all-students']);
  }
}
