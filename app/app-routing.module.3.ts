import { NgModule } from 'angular/core';
import { Routes, RouterModule } from 'angular/router';

export const routes: Routes = [
 // { path: '', redirectTo: 'script/', pathMatch: 'full'},
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module.3#HeroModule' },
  { path: 'script', loadChildren: 'app/script/script.module#ScriptModule' },
  { path: 'auth',   loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '',       loadChildren: 'app/auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
