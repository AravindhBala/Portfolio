import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'ARIES APPLICATIONS(AIMS,A2F) MAINTENANCE & SUPPORT (06/2022 - Present)',
      technologies: 'Java,Spring MVC,Html, Css, JavaScript, JQuery, Bootstrap',
      description: [
        'Support of all Service modifications made to Aries applications.',
        'Maintain all Aries projects and client responsibilities in accordance with the specifications',
      ],
    },
    {
      title: 'FARADAY FUTURE  (06/2022 - 06/2024)',
      technologies: 'Enovia, CATIA, MQL, TCL, JSP,JPO And Triggers',
      description: [
        ' It is a product life Cycle management Application',
        'Provided technical support, troubleshooting, and maintenance for ENOVIA applications, including performance optimization and software upgrades.',
      ],
    },
    {
      title: ' ARIES EXTENSION MOBILE AND WEB APPLICATION (06/2023 - 012/2023)',
      technologies: 'Java,Spring MVC,Html, Css, JavaScript, JQuery, Bootstrap',
      description: [
        'Designing and implementing web applications using Spring MVC framework, adhering to best practices and coding standards',
        ' Designing and implementing database schemas, writing SQL queries, and integrating with Spring Data or other ORM frameworks for data access'
        
      ],
    },
    
  ];
  constructor() { }

  ngOnInit(): void { }
}
