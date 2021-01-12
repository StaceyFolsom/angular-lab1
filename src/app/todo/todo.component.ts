import { Component, OnInit } from '@angular/core';

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
  filter: string = "";
  todo: Todo[];
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
    ]; console.log(this.todo);
  }

  ngOnInit(): void {
  }

  newItem : TodoComponent;

  addTask(newItem) : void {
    if (newItem == null) {
      alert("Did you forget something?");
    } else {
      this.todo.push({task: newItem, completed: false});
      this.newItem = null;
    }
  }

  removeTask(i) : void {
    this.todo.splice(i, 1);
  }

  completeTask(i) : void {
    let task = this.todo[i];
    task.completed = true;
  }

  getFilteredResults() {
    return this.todo.filter((todo) => {
      return todo.task.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  }
