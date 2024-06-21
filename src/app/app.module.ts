import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PredefinePipeComponent } from './components/predefine-pipe/predefine-pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { SummaryPipe } from './Pipe/summary.pipe';
import { FilePipe } from './Pipe/file.pipe';
  



@NgModule({
  declarations: [
    AppComponent,
    PredefinePipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    FilePipe
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
