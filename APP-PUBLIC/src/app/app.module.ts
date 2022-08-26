import { MenuServiceService } from './services/menu-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './services/search-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    FrameworkComponent,
    HomepageComponent,
    AboutComponent,
    MenuListComponent,
    MenuDetailComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    NavbarComponent,
    SearchFilterPipe,
    SearchFilterPipe,
    ContactComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MenuServiceService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
