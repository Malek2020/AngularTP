import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from "../../shared/services/quiz.service";
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  answeredDate: Map<number, Date> = new Map();
  currentDate = new Date();
  categoryId: number= 1;
  questions: any[] = [];
  categoryName: string = '';


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private categorieService: CategorieService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = +params['category.id'];  
      this.loadQuestions();
    });
    this.quizService.getQuizContent();
  }

  onAnswerSelected(questionId: number) {
    this.answeredDate.set(questionId, new Date());
  }

  getQuestionDate(questionId: number) {
    return this.answeredDate.get(questionId) || null;
  }
  loadQuestions(): void {
    this.categorieService.getCategorieContent(); 
    this.categorieService.getQuestions(); 
    
    this.questions = this.categorieService.getQuestionsByCategory(this.categoryId);

    const category = this.categorieService.categorieContent.find(cat => cat.id === this.categoryId);
    this.categoryName = category ? category.name : 'Unknown Category';
  }
}
