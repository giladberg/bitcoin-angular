import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './cmps/header/header/header.component';
import { NavbarComponent } from './cmps/header/navbar/navbar.component';
import { ContactListComponent } from './cmps/contact/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormComponent } from './cmps/contact/form/form.component';
import { ContactAddComponent } from './pages/contact-add/contact-add.component';
import { FilterComponent } from './cmps/contact/filter/filter.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { StatisticPreviewComponent } from './cmps/statistic-preview/statistic-preview.component';
import { SigninComponent } from './pages/signin/signin.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move/move-preview/move-preview.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    NavbarComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    FormComponent,
    ContactAddComponent,
    FilterComponent,
    StatisticComponent,
    StatisticPreviewComponent,
    SigninComponent,
    TransferFundComponent,
    MoveListComponent,
    MovePreviewComponent

  ],
  imports: [
    GoogleChartsModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
