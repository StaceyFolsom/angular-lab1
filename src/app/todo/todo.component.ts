import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo: Todo[];
  constructor() { 
  this.todo = [
      {
        task: "fold clothes",
        completed: false,
      },
      {
        task: "put clothes in dresser",
        completed: false,
      },
      {
        task: "take a nap",
        completed: true,
      },
      {
        task: "walk the dog",
        completed: false,
      },
      {
        task: "make dinner",
        completed: false,
      },
      {
        task: "take down Christmas tree",
        completed: true,
      },
    ];
  }

  ngOnInit(): void {
  }

}
