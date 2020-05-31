import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
    constructor() {}
    
  ngOnInit(): void {
  }


  w3_open() {
    if(document.getElementById("mySidebar").style.display == "block"){
      document.getElementById("mySidebar").style.display = "none";  
    }else{
      document.getElementById("mySidebar").style.display = "block";  
    }
    
  }
  w3_close(){
    document.getElementById("mySidebar").style.display = "none"; 
  }

}