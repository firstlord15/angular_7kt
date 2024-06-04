import { Component } from "@angular/core";
import {visible} from "ansi-colors";

export class User {
    constructor(public first_name: string, public last_name: string, public email: string, public password: string) {}
    
}

@Component({
    selector: "my-app",
    template:
        `
            <div [ngClass]="{wrapper: true, background: true}">
                <div class="">
                    <p [ngClass]="{title: true}" class="text-center"><kbd style="padding: 15px; border-radius: 20px">Registration</kbd>
                    </p>
                </div>
                <div style="margin: 30px">
                    <div [ngClass]="{form_group:true}">
                        <div>
                            <label [ngClass]="{text: true}" style="font-width: bold;">First Name</label>
                            <input [(ngModel)]="this.first_name" name="first_name" [ngClass]="{input: true, text: true}" style="font-size: 16px" type="text" class="form-control-plaintext">
                        </div>
                        <div>
                            <label [ngClass]="{text: true}" style="font-width: bold;">Last Name</label>
                            <input [(ngModel)]="this.last_name" name="last_name" [ngClass]="{input: true, text: true}" style="font-size: 16px" type="text" class="form-control-plaintext">
                        </div>
                        <div>
                            <label [ngClass]="{text: true}" style="font-width: bold;">Email</label>
                            <input [(ngModel)]="this.email" name="email" [ngClass]="{input: true, text: true}" style="font-size: 16px" type="email" class="form-control-plaintext">
                        </div>
                        <div>
                            <label [ngClass]="{text: true}" style="font-width: bold;">Password</label>
                            <input [(ngModel)]="this.password" name="first_name" [ngClass]="{input: true, text: true}" style="font-size: 16px" type="password" class="form-control-plaintext">
                        </div>
                    </div>
                    <div style="margin: 30px 0" [ngClass]="{form_group:true}">
                        <button class="custom_button" data-text="Awesome" (click)="addUser()">
                            <span class="actual-text">&nbsp;Add User&nbsp;</span>
                            <span aria-hidden="true" class="hover-text">&nbsp;Add User&nbsp;</span>
                        </button>
                    </div>
                </div>
                <div [ngClass]="{container: true}">
                    <h1 [ngClass]="{subtitle__user: true}">Добавленные пользователи: </h1>
                    <div [ngClass]="{card: true, background: true}" *ngFor="let user of users; index as i;">
                        <h4 [ngClass]="{subtitle: true}">[ Пользователь номер {{ i }}    ]</h4>
                        <ul>
                            <li [ngClass]="{text: true}">first_name: <span style="color: aquamarine;">{{ user.first_name }}</span></li>
                            <li [ngClass]="{text: true}">last_name: <span style="color: aquamarine;">{{ user.last_name }}</span></li>
                            <li [ngClass]="{text: true}">email: <span style="color: aquamarine;">{{ user.email }}</span></li>
                            <li [ngClass]="{text: true}">password: <span style="color: aquamarine;">{{ user.password }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
    styles: [
        `
            .input{width: 100%; color: black!important; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}
            .form_group{width: 300px; display: flex;  flex-direction: column; justify-content: center; align-items: stretch}
            .wrapper{margin: 60px auto; padding:  50px 15px; width: 1200px; display: flex; flex-direction: column; justify-content: center; align-items: center;}
            .background{border-radius: 30px; background: #141414; box-shadow: #070707 0 0 10px;}
            .container{display: flex; flex-wrap: wrap; width: 1100px}
            .text{font-size: 20px; font-family: monospace; color: #fff}
            .title{font-size: 48px; font-family: monospace; color: cyan}
            .card{background-color: #303030!important; padding: 30px; margin: 30px auto}
            .subtitle{font-size: 28px; font-family: monospace; color: #1dce6b; margin: 10px 0; text-align: center}
            .subtitle__user{color: white; margin-top: 100px; width: 100%; text-align: center}
        `
    ]
})

export class AppComponent {
    first_name: string = ""
    last_name: string = ""
    email: string = ""
    password: string = ""

    user: User = new User("Ratmir", "Ashimov", "ashimovr21@st.ithub.ru", "ffffffff")
    users: User[] = [this.user]

    addUser(){
        if (this.first_name.length != 0 && this.last_name.length != 0 && this.email.length != 0 && this.password.length != 0){
            this.users.push(new User(this.first_name, this.last_name, this.email, this.password))
            this.first_name = ""
            this.last_name = ""
            this.email = ""
            this.password = ""
        }
    }
}