import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  color: string = 'black';
  constructor() { }

  ngOnInit() {
  }

  private getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomizeColor() { //that is called by parent
  this.color = this.getRandomColor();
}


}
