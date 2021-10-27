import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {

  dataHora: Date;

  constructor() {
    this. dataHora = new Date();
    setInterval(() => {
      this. dataHora = new Date();
    }, 1000)
  }

  ngOnInit(): void {
  }

}
