import {Component, ViewChild} from '@angular/core';
import {NgFor} from "@angular/common";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm!: NgForm;
  user: { email: string, subscription: string, password: string } = {email: "", subscription: "", password: ""};
  submitted: boolean = false;


  onSubmit() {
    this.submitted = true;

    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
