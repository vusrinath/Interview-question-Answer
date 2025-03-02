import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {APIResponsModel} from '../model/language.model';


@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  apiEndPoint: string = "https://freeapi.gerasim.in/api/Interview/";
  apiEndPoint2: string = "https://freeapi.gerasim.in/api/miniproject/";

  constructor(private http:HttpClient) {

   }

  getAllLanguages(): Observable<APIResponsModel>{
    return this.http.get<APIResponsModel>(this.apiEndPoint+"GetAllLanguage");
   }
}
