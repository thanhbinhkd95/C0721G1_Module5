import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  country: string[] = ["VietNam", "China", "United", "Korea", "England"];

  constructor(private fb: FormBuilder) {
    this.myForm = new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl("", [
          Validators.minLength(6),
          Validators.required,
        ]),
        country: new FormControl("", [Validators.required]),
        age: new FormControl("", [Validators.required, Validators.min(18)]),
        gender: new FormControl("0", [Validators.required]),
        phone: new FormControl("", [
          Validators.required,
          Validators.pattern("^\\+84\\d{9,10}$"),
        ]),
      },
      [this.comparePassWord]
    );
  }

  ngOnInit(): void {
    // this.initializeForm();
  }

  // initializeForm(): void {
  //   this.myForm = this.fb.group({
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     country: "",
  //     age: "",
  //     gender: "",
  //     phone: "",
  //   });
  // }

  register() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log(this.myForm.hasError("passwordNotMatch"));
    }
  }

  comparePassWord(variable: AbstractControl) {
    const pass = variable.value;
    return pass.password === pass.confirmPassword
      ? null
      : { passwordNotMatch: true };
  }

  // selectCountry(event): void {
  //   this.myForm.patchValue({
  //     country:event.target.value
  //   });
  // }

  
}
