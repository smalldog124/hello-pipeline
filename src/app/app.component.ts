import { Component } from '@angular/core';
import { HelloService } from './reques-api/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  constructor(public api:HelloService){}

  ngOnInit(): void {
    this.getMessage()
  }

  getMessage(){
    return this.api.getHello().subscribe((data: any)=>{
      this.title = data.message;
    });
  }
}
