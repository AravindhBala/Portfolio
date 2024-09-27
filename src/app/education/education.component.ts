import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'KUMARAGURU COLLEGE OF ENGINEERING AND TECHNOLOGY - COIMBATORE',
      course: 'B.E - Mechatronics Engineering',
      duration: '2018-2022',
      score: '75%',
    },
    {
      institute: 'VEVEAHAM BOYS HR.SEC.SCHOOL - DHARAPURAM',
      course: 'Higher Secondary Certificate',
      duration: '2016-2018',
      score: '85%',
    },
    {
      institute: 'VEVEAHAM BOYS HR.SEC.SCHOOL - DHARAPURAM',
      course: 'Secondary School Leaving Certificate',
      duration: '2015-2016',
      score: '92%',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
