import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';

const routes: Routes = [
  {
    path:'',
    component: InlineEditingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
