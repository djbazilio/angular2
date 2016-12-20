import { NgModule }      from 'angular/core';
import { CommonModule }  from 'angular/common';
import { FormsModule }   from 'angular/forms';

import { Script }    from './script';
import { ScriptRoutingModule }    from './script-routing.module';

@NgModule({
  imports:      [ CommonModule, FormsModule, ScriptRoutingModule ],
  declarations: [ Script ]
})
export class ScriptModule {}
