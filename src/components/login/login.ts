import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {routesNames} from '../../constants/routes';
import {formControls} from '../../constants/forms';
import {matchPasswordValidator, emailPattern} from '../../constants/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public formControls = formControls;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder
      .group({
          [this.formControls.username]: [null, Validators.required],
          [this.formControls.login]: [null, [Validators.required,
            emailPattern]],
          [this.formControls.password]: [null, Validators.required],
          [this.formControls.passwordConfirm]: [null, Validators.required]
        },
        {
          validator: matchPasswordValidator
        });
  }

  public submit(): void {
    const username = this.loginForm.get(this.formControls.username).value;
    this.authService.setUsername(username);
    this.router.navigate([routesNames.home]);
  }

}
