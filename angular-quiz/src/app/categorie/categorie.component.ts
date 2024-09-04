import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../shared/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{
 
  categoriContent: any[] = [];
  search: string = '';
  categoryId: number = 1;

  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.categorieService.getCategorieContent(); 
    this.categorieService.getQuestions();
    this.categoriContent = this.categorieService.categorieContent;      
  }
  
  onSearch() {
    this.categoriContent = this.categorieService.filterCategories(this.search);
  }
  SelectCategory(categoryId: number):void {
    const questions = this.categorieService.getQuestionsByCategory(categoryId);
    this.router.navigate(['/quiz', categoryId]);
  }
  onReset() {
    this.search = '';
    this.categoriContent = this.categorieService.categorieContent;
  }
}
