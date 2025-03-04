import { Component, inject, OnInit } from '@angular/core';
import { InterviewService } from '../../service/interview.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { APIResponsModel, Ilanguage, LanguageTopic } from '../../model/language.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  service = inject(InterviewService);
  languagaesList: Ilanguage[] = [];
  topicList$!: Observable<LanguageTopic[]>;
  selectedLanguage: number = 0;

  ngOnInit(): void {
    this.loadLanguages();
  }

  loadLanguages() {
    this.service.getAllLanguages().subscribe((res) => {
      this.languagaesList = res.data;
    })
  }

  onLanguageChange(event: any) {
    this.topicList$ = this.service.getTopicsByLanguageId(event).pipe(
      map((item: any) => {
        return item.data;
      }))
  }



}
