import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  constructor() { }
  projects: Project[] = [
    {
      title: 'Fruit grading using neural network based image processing (12/2021)',
      technologies: 'ML algorithms,neural network',
      description: [
        'It is College project used to grade a fruits using neural networks  '
      ],
    },
    {
      title: 'Machine learning based air pollution monitoring system and forecasting (06/2022)',
      technologies: 'ML algorithms',
      description: [
        'It is a college project used to moniter air pollution and forcasting efficiently'
      ],
    },
    
  ];
  ngOnInit(): void {
  }

}
