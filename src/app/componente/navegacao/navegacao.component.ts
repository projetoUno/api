import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

}
