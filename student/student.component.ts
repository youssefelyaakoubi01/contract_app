import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/students/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  all_student:any;
  constructor(private http:HttpClient){
    
      this.http.get('http://localhost:3000/all_students').subscribe((data) => {
        this.all_student=data
      }
      
    )
  }
  ngOnInit(): void {
    
  }


}
