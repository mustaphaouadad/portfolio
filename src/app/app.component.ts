import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet,
     SkillsComponent,
     ProjectComponent,
     HeaderComponent,
     ExperienceComponent,
     NavbarComponent
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
