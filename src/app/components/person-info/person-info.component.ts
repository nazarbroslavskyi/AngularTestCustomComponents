import { Component, OnDestroy, OnInit } from '@angular/core';
import { FreeApiService } from "../../free-api.service";
import { map, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit, OnDestroy {

  personName: string = '';
  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(private userInfoService: FreeApiService) { }

  ngOnInit(): void {
    this.userInfoService.getUserData(1)
      .pipe(
        map(data => data.name),
      )
      .subscribe((name) => {
        for(let i = 0; i < 100000; i++) {
          console.log(i);
        }
        this.personName = name;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
