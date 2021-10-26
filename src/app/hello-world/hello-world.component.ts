import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  nome: string;
  helloWorldMessage: string;

  constructor() {
    this.helloWorldMessage = 'Hello World!';
    this.nome = '';
  }

  ngOnInit(): void {
  }

  setNome(event: any) {
    this.nome = event.target.value;
  }

  helloWorld() {
    this.helloWorldMessage = `Hello World, ${this.nome}.`;
  }

}
