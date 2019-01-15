import { Component } from '@angular/core';
//Form Validtions
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    complexForm: FormGroup;
    formValidate: boolean;
    user = new Object();
    firstName: AbstractControl;
    email: AbstractControl;
    phoneNumber: AbstractControl;
    constructor(fb: FormBuilder) {
        this.complexForm = fb.group({
            'phoneNumber': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
            'firstName': [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z, " "]+')])],
            'email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
        })
        this.phoneNumber = this.complexForm.controls['phoneNumber'];
        this.firstName = this.complexForm.controls['firstName'];
        this.email = this.complexForm.controls['email'];
    }


    submitForm(value: any) {
        if (this.complexForm.valid == true) {
            console.log(JSON.stringify(this.user))
        }
        else {
            console.info("add USer form submission failure.....");
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }
    }

}
