import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AvatarModule} from 'ngx-avatar';
import {RouterModule, Routes} from '@angular/router';
import { ToolbarComponent } from './contact/ui/toolbar/toolbar.component';
import {SidenavComponent} from './contact/ui/sidenav/sidenav.component';

const appRoutes: Routes = [
{path: 'contacts', component: ContactListComponent},
{path: 'contacts/new', component: ContactDetailComponent},
{path: 'contacts/:id', component: ContactDetailComponent},
{path: '', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    AvatarModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
