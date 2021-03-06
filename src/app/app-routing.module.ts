import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { TodoComponent } from './todo/todo.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
