import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component'
const appRoutes: Routes=[{path:'about',component:AboutComponent},
{path:'',component:HomepageComponent},{path:'contact',component:ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
