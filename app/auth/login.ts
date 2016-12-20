import {Component, ElementRef, OnInit} from 'angular/core';
import {Http, Headers} from 'angular/http';
import {AuthenticationService, User} from './auth.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.email" id="email" 
                            type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
 
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
 
                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
            </div>
        </div>
    	`
})

export class Login implements OnInit {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService, public http: Http) {}

	login() {
	  var username = 'root';
	  var password = 'root2';

	  var creds = "username=" + username + "&password=" + password;

	  var headers = new Headers();
	  headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  this.http.post('http://217.66.96.200:8080/api/login', creds, {
		headers: headers
		})
		.map(res => res.json())
		.subscribe(
		  data => this.saveJwt(data),
		  err => this.logError(err),
		  () => console.log('Authentication Complete')
		);

	}


	saveJwt(jwt:any) {
	  if(jwt) {
          console.log(jwt)
		localStorage.setItem('id_token', jwt)
	  }
	}
    ngOnInit() {
        this.http.get('http://217.66.96.200:8080/api/login')
            .map(res => res.json())
            .subscribe(
                data => this.saveJwt(data.id_token),
                err => this.logError(err),
            () => console.log('Authentication Complete')
        );
    }

	logError(e:any){
		console.log(e)
	}

   // login() {
    //    if(!this._service.login(this.user)){
    //        this.errorMsg = 'Failed to login';
    //    }
   // }
}