import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';
import * as AOS from 'aos';
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Java',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'mySQL',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Spring MVC',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'JQuery',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Enovia',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'SpringBoot',
      level: 'Intermidiate',
      rating: 75,
    },
  ];
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
}
