import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AvatarModule} from 'ngx-avatar';
import {RouterModule, Routes} from '@angular/router';
import { ToolbarComponent } from './contact/ui/toolbar/toolbar.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {ToolbarServiceService} from './contact/services/toolbar-service.service';

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
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [ContactService,
  ContactHttpService,
  ToolbarServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
