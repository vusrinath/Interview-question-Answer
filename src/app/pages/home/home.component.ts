import { Component, inject, OnInit } from '@angular/core';
import { InterviewService } from '../../service/interview.service';
import { CommonModule } from '@angular/common'

import { APIResponsModel, Ilanguage } from '../../model/language.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  service = inject(InterviewService);
  languagaesList: Ilanguage[] = [];

  ngOnInit(): void {
    this.loadLanguages();
  }

  loadLanguages() {
    this.service.getAllLanguages().subscribe((res) => {
      this.languagaesList = res.data;
    })
  }
}
