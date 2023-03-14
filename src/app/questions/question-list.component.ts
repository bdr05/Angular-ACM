import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IQuestion } from "./question";
import { QuestionService } from "./question.service";


@Component({
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']

})
export class QuestionListComponent implements OnInit, OnDestroy{
    pageTitle = 'Question List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    sub!: Subscription;
   
    private _listFilter: string = '';
    filteredQuestions: IQuestion[] | undefined;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In Setter:', value);
        this.filteredQuestions = this.performFilter(value);
    }
    
    questions: IQuestion[] = [];

   constructor(private questionService: QuestionService){

   } 

performFilter(filterby: string): IQuestion[]{
    filterby = filterby.toLowerCase();
    return this.questions.filter((question: IQuestion) =>
    question.TruthQuestions.toLowerCase().includes(filterby));
}

// toggleImage(): void{
//     this.showImage = !this.showImage;
// }
ngOnInit(): void {
    this.sub = this.questionService.getQuestions().subscribe({
        next: questions => {
            this.questions = questions;
            this.filteredQuestions = this.questions;
        },
        error: err => this.errorMessage = err
    });
    
}

ngOnDestroy() {
    this.sub.unsubscribe();
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Question List:'+message;
}

}