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
<<<<<<< HEAD
=======
    path: '',
    component: AboutComponent
  },
  {
>>>>>>> ebe9d7e6fa0f32d7be7a66256c6fc4bfa2045e3e
    path: 'todo',
    component: TodoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
