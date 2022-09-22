import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  

  
  title = 'segunda-clase-b';

  flag : boolean= true

  public valor: string = ""
  public escala : string = ""

    constructor(){

    }

    ngOnInit(): void {
      console.log("ngOnInit");
      this.pushButton();
    }

    pushButton(){
      let button = document.getElementById("button");
      button?.addEventListener("click",()=>{
         //this.flag=!this.flag
         let grado: HTMLInputElement = document.getElementById("grado") as HTMLInputElement
         let escala: HTMLInputElement = document.getElementById("escala") as HTMLInputElement
         this.valor = grado.value
         this.escala = escala.value
      })
    }
  
    
    
    
}
