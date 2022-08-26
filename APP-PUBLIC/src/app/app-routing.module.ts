
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
   {
    path: 'reviews', component: ReviewsComponent
  },
  {
    path: 'menu', component: MenuListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'menu/:menuid', component: MenuDetailComponent
  },
  {
    path: 'new', component: CreateComponent
  },
  {
    path: 'edit/:menuid', component: EditComponent
  },
  {
    path: 'delete/:menuId', component: DeleteComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
