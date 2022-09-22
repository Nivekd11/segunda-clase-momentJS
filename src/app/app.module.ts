import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestroyComponent } from './components/destroy/destroy.component';
import { GradosPipe } from './libs/pipes/grados.pipe';
import { TiempoPipe } from './libs/pipes/tiempo.pipe';
import { TimeComponent } from './components/time/time.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DestroyComponent,
    GradosPipe,
    TiempoPipe,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
