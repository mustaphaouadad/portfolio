import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type SkillPosition = [number,number,string];

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills = ["angular", "java EE","javascript","php","html","css","react","laravel","bootstrap"]
  skillPosition:SkillPosition[] = [];
  
 
  currentlyDragging : number | undefined;

  mouseX: number | undefined;
  mouseY: number | undefined;

  ngOnInit() {
    for (let i = 0; i<this.skills.length;i++ ) {
      let pos: SkillPosition  = ([ i * (90 / this.skills.length),((i + 1) % 3) * 33, this.getRandomRotation() ]);
      this.skillPosition.push(pos);
     
      
    }
    
  }
  getRandomRotation(){
    let randomVal=(Math.random()*30)-15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging(i :number){
    
    this.currentlyDragging = i;
  }

  mousemove(e : MouseEvent){
    if (this.currentlyDragging == undefined) {return;}
    this.mouseX = e.pageX -40;
    this.mouseY =e.pageY - 8;
  }

  stopDragging(){
    this.currentlyDragging=undefined;
  }

  
}
