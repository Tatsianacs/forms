import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') myForm: NgForm;
    defaultQuestion = 'teacher';
    answer = '';
    genders = ['male', 'female'];
    radioSelected: string;
    user = {
        username: '',
        email: '',
        question: '',
        answer: '',
        gender: ''
    };
    submitted = false;

    constructor() {
        this.radioSelected = 'female';
    }

    suggestUserName() {
        const suggestedName = 'Superuser';
        // this.myForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: ''
        //     },
        //     secret: 'pet',
        //     questionAnswer: '',
        //     gender: 'female'
        // });

        this.myForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });

    }

    onSubmit() {
        this.submitted = true;
        console.log(this.myForm.value);
        this.user.username = this.myForm.value.userData.username;
        this.user.email = this.myForm.value.userData.email;
        this.user.question = this.myForm.value.secret;
        this.user.answer = this.myForm.value.questionAnswer;
        this.user.gender = this.myForm.value.gender;

        this.myForm.reset();
    }
}
