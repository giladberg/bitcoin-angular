import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {ContactComponent} from './pages/contact/contact.component'
import {ContactDetailsComponent} from './pages/contact-details/contact-details.component'
import {ContactEditComponent} from './pages/contact-edit/contact-edit.component'
import {ContactAddComponent} from './pages/contact-add/contact-add.component'
import {StatisticComponent} from './pages/statistic/statistic.component'
import {SigninComponent} from './pages/signin/signin.component'


const routes: Routes = [
 { path: 'contact', component: ContactComponent},
 { path: 'contact/:id', component: ContactDetailsComponent},
 { path: 'edit/:id', component: ContactEditComponent},
 { path: 'add', component: ContactAddComponent},
 { path: 'statistic', component: StatisticComponent},
 { path: 'signin', component: SigninComponent},
 { path: "**", component: HomeComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
