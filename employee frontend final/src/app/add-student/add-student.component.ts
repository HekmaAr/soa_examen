import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student: Student = new Student();
  private baseURL = "http://localhost:8082/api/student/create";

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  // Méthode pour enregistrer un étudiant
  saveStudent() {
    this.studentService.addStudent(this.student).subscribe(
      data => {
        console.log(data);
        this.goToStudentList();  // Redirige vers la liste des étudiants
      },
      error => {
        console.log(error);  // Affiche l'erreur en cas de problème
      }
    );
  }

  // Redirection vers la liste des étudiants
  goToStudentList() {
    this.router.navigate(['/show-all-students']);
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(this.student);  // Affiche les données de l'étudiant dans la console
      this.saveStudent();  // Sauvegarde l'étudiant
    } else {
      console.log('Form is invalid');  // Affiche un message si le formulaire est invalide
    }
  }
}
