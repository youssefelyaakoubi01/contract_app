import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {
    console.log();
    
  }
  printData(test:any){
    console.log(test);
    
  }
  
    
}
