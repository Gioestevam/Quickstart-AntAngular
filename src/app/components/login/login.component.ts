import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formLogin: FormGroup;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {
    this.renderer.setStyle(document.body, 'background-color', '#342D49')
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  login() {
    console.log(this.formLogin.value);
  }

}
