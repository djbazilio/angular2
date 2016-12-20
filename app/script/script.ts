import { Component, OnInit } from 'angular/core';
import { AuthenticationService } from '../auth/auth.service'

@Component({
  selector: 'app-contact',
  providers: [AuthenticationService],
  templateUrl: 'app/script/Views/script.html'
})

export class Script implements OnInit {
  constructor( private _service:AuthenticationService){}

  script : Object = {};
  model = {
    left: true,
    middle: false,
    right: false
  };

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() {
    this.script = {"test":"Hello world"};
      console.log(this.script);
      this._service.checkCredentials();
  }
}

