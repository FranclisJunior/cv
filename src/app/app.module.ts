import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {ContactComponent} from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurriculumComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 1500}),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
