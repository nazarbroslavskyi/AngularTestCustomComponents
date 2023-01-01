import { Component } from '@angular/core';
import { FreeApiService } from "./free-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';


  constructor(private freeApi: FreeApiService) {

  }
}
