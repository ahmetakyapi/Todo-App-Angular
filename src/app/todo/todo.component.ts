import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /* Eklenen todo */
  public items = []

  public newTodo: any

  /* Input değerininin eklenmesi ve içi boş ise ekleme yapmasın. */
  public addTodo() {
    if (
      this.newTodo == ' ' ||
      this.newTodo.length <= 3 ||
      this.newTodo.trim().length === 0
    ) {
    } else {
      this.items.push(this.newTodo as never)
      this.newTodo = ''
    }
  }

  /* Silinmesi gereken todo için */
  public deleteTodo(index: any) {
    this.items.splice(index, 1)
  }
}
