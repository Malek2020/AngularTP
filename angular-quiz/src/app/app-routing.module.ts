import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./quiz/result/result.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CategorieComponent } from './categorie/categorie.component';
import { QuestionComponent } from './quiz/question/question.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quiz/:id',
    component: QuizComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'quiz/:category.id',
    component: QuestionComponent
  },
  {
    path: 'categories',
    component: CategorieComponent
  },
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
