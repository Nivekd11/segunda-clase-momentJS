import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.scss']
})
export class DestroyComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  getData(p:any){
    console.log(p);
  }
  
}
