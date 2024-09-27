import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Developer',
      company: 'Ariztid Technologies Pvt Ltd',
      duration: 'March 2022 - Present',
      description: [
        'Working in a Web Applications and Mobile Applications End to End Project.',
        'Working in Spring MVC Framework With mySQL',
        'working with back End Team with my Full Potential and Dedication.'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
