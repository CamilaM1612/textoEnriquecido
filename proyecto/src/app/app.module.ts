import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoComponent } from './components/texto/texto.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEditorModule.forRoot({
      locals: {
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        underline: 'Underline',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify'

      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
