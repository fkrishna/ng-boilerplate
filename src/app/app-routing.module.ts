import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** 
 * Feature modules have to be wired up to the AppRoutingModule 
 * so the router knows about them. 
 * Lazy loading syntax uses loadChildren followed by a string 
 * that is the relative path to the module, a hash mark or #, 
 * and the module’s class name.
*/

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: '@app/modules/home/home.module#HomeModule' 
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
