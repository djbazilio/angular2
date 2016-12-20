import { NgModule }           from 'angular/core';
import { BrowserModule }      from 'angular/platform-browser';
import { FormsModule }        from 'angular/forms';
import { HttpModule, 
			JsonpModule } 	  from 'angular/http';

/*Bootstrap*/
import { DropdownModule,
        AccordionModule  }    from 'ng2-bootstrap/ng2-bootstrap';

/* App Root */
import { AppComponent }       from './app.component.3';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Feature Modules */
import { ContactModule }      from './contact/contact.module.3';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module.3';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ContactModule,
    AppRoutingModule,
    DropdownModule,
    AccordionModule,
	HttpModule,
	JsonpModule
  ],
  providers:    [ UserService ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
