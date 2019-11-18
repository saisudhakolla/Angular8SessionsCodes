import { Component, OnInit ,VERSION} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

 version:string;

  constructor() { 
    this.version=VERSION.full;
  }

  ngOnInit() {
  }

}
