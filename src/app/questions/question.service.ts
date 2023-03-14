import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IQuestion } from "./question";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    private questionUrl = "api/questions/questions.json"

    constructor(private http: HttpClient) {}

    getQuestions(): Observable<IQuestion[]> {
        return this.http.get<IQuestion[]>(this.questionUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }

}