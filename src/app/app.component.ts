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
        console.log(this.myForm.value);
    }
}
