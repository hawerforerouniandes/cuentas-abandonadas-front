import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GetLoginUseCaseService} from '../../../../domain/usecases/login/get-login-use-case.service';
import {StorageService} from '../../../shared/services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted = false;
  errorLogin: any = false;

  constructor(private _getLoginUseCase: GetLoginUseCaseService,
              private _router: Router,
              private _storageservice: StorageService) {

    this.reactiveForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      recaptchaReactive: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
    const auth = this._storageservice.getItem('auth') ? true : false;
    if (auth) {
      const token = this._storageservice.getItem('payload').token;
      if (token) {
      this._router.navigate(['/perfil']);
      }
    }
  }

  get userName() {
    return this.reactiveForm.get('userName');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  get recaptchaReactive() {
    return this.reactiveForm.get('recaptchaReactive');
  }

  onSubmit(): void {
    this.submitted = true;

   if((!this.userName.errors || !this.password.errors) && !this.recaptchaReactive.errors){
    this._getLoginUseCase.logIn({userName: this.userName.value, password: this.password.value}).subscribe(
      (ResponseData) => {
        if(ResponseData && ResponseData.infoUsuario && ResponseData.token)
        {
          this.errorLogin = null;
          this._storageservice.clear();
          this._storageservice.setItem('payload', ResponseData);
          this._storageservice.setItem('auth', true);
          this._router.navigate(['/perfil']);
        }
        else{
          this.errorLogin = ResponseData.mensaje;
        }
      });
    }
  }
}
