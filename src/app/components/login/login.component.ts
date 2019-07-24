import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../modules/shared/services/message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  isLoading = false;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private message: MessageService
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
    this.isLoading = true;
    this.isLoading = false;
    this.message.showMessage('success', 'Usuário logado com sucesso!');
  }

}
