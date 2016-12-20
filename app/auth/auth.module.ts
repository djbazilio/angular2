import { NgModule }      from 'angular/core';
import { CommonModule }  from 'angular/common';
import { FormsModule }   from 'angular/forms';

import { Login }    from './login';
import { AuthRoutingModule }    from './auth-routing.module';

@NgModule({
  imports:      [ CommonModule, FormsModule, AuthRoutingModule ],
  declarations: [ Login ]
})
export class AuthModule {}
