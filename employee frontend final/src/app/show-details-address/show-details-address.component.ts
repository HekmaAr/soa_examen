import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-show-details',
  templateUrl: './show-details-address.component.html',
  styleUrls: ['./show-details-address.component.css']
})
export class ShowDetailsComponentAddress {


  
  id: number
  student!: Student
  constructor(private route: ActivatedRoute, private studentService: StudentService) { 

    this.id=0
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe( data => {
      this.student = data;
    });
  }

}
