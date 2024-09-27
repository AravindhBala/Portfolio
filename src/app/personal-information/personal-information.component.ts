import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Aravindhan B'],
    ['DOB', '06/11/2000'],
    ['Work Exp', '2 Years'],
    ['Education', 'B.E-Mechatronics Engineering (2022)'],
    ['Interests', 'Football'],
  ];

  aboutMe: string[] = [
    'Hi, I’m Aravindhan, a dedicated and enthusiastic Java Developer with a strong foundation in software engineering and application development',
    'With 2 years of experience, I specialize in building high-performance, scalable, and secure applications using Java and related technologies.',
    'Beyond coding, I am passionate about continuous learning and staying up-to-date with the latest trends and advancements in the tech world',
    ' I’m always looking for new opportunities to solve challenging problems and contribute to impactful projects.',
  ];

  constructor() { }

  ngOnInit(): void { }
}
