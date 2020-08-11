import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//registerForm: FormGroup;
angForm: FormGroup;
submitted = false;
  // constructor(private rr:Router) { }
  constructor(private f: FormBuilder,private dataService: CrudService,private router:Router) {
    this.angForm = this.f.group({
      fullname: ['', Validators.required],
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    //   {
    //     validator: MustMatch('password', 'confirmPassword')
    // });
  });
   }
// userform:FormGroup;

get f() { return this.angForm.controls; }

/*
onSubmit() {
    this.submitted = true;
    if (this.angForm.invalid) {
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}*/
ngOnInit() {
}
  postdata(angForm1:NgForm)
  {
    this.submitted = true;


  
  //postdata(angForm1:NgForm)
  console.log(angForm1);
  alert(angForm1.value.fullname);
    this.dataService.userregistration(angForm1.value.fullname,angForm1.value.email,angForm1.value.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/']);
             console.log(data);
          },
          error => {
            console.log(error);
          });
  }
  get fullname() { return this.angForm.get('fullname'); }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
 
}
 
