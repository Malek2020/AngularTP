import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorieContent: any[] = [];
  questions: any[] = [];

  private categoriesUrl = 'http://localhost:3000/categories';
  private questionsUrl = 'http://localhost:3000/questions'

  constructor(private http: HttpClient) { }
  getCategorieContent() {
    this.http.get<any[]>(this.categoriesUrl).subscribe(
      (categories) => {
        this.categorieContent = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  getQuestions(): void {
    this.http.get<any[]>(this.questionsUrl).subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Error fetching questions:', error);
      }
    );
  }

  filterCategories(search: string): any[] {
    return this.categorieContent.filter(category =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  getQuestionsByCategory(categoryId: number): any[] {
    return this.questions.filter(question => question.categoryId === categoryId);
  }

  resetCategorie() {
    this.categorieContent = [];

  }
}
