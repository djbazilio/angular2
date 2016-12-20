import { Component } from 'angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/menu/menu.html',
  styleUrls:['app/menu/style.css']
})
export class AppComponent {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen:false};

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public links:Array<any> = [
    {
      name:'Contact',
      url:'contact'
    },{
      name:'Crisis Center',
      url:'heroes'
    },{
      name:'Heroes',
      url:'heroes'
    },{
      name:'Script',
      url:'script'
    },{
      name:'Auth',
      url:'auth'
    }
  ];
}

