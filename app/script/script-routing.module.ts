import { NgModule }            from 'angular/core';
import { Routes,
         RouterModule }        from 'angular/router';

import { Script }    from './script';


const routes: Routes = [
  { path: '',    component: Script },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptRoutingModule {}

