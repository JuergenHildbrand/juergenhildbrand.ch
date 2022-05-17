import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopContainerComponent,
    HeaderComponent,
    ImprintComponent,
    FooterComponent,
    ContactSectionComponent,
    AboutMeSectionComponent,
    WorkSectionComponent,
    SkillsSectionComponent,
    TopSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
