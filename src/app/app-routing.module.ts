import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { ContentNotFoundComponent } from './content-not-found/content-not-found.component';

const routes: Routes = [
  {
    path: "content",
    component: ContentListComponent
  },
  {
    path: "",
    redirectTo: "/content",
    pathMatch: "full"
  },
  {
  path: "content/:id",
  component: ItemDetailsComponent
  },
  {
    path: "search",
    component: ContentSearchComponent
  },
  {
    path: "**",
    component: ContentNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
