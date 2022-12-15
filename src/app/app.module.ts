import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiPipe } from './src/app/shared/pipes/multi.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MultiPipe],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [MultiPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
