import { Component, OnInit } from '@angular/core';
import { Tarefa } from './tarefa';
import { Pessoa } from './pessoa';
import { TAREFAS } from './mock-tarefas';
import { PESSOAS } from './mock-pessoas';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  pessoas = PESSOAS;

  tarefas = TAREFAS;

  constructor() { }

  ngOnInit() {
  }

}
