import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-form-page',
  templateUrl: './contact_form_page.html',
  styleUrls: ['./contact_form_page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class ContactFormPage {
  formIsSubmitting = false;
  formSubmittedSuccessfully = false;
  readonly nameField = new FormControl('', [Validators.required]);
  readonly emailField = new FormControl('', [Validators.required, Validators.email]);
  readonly subjectField = new FormControl('', [Validators.required]);
  readonly messageField = new FormControl('', [Validators.required]);
  readonly contactForm = new FormGroup({
    name: this.nameField,
    email: this.emailField,
    subject: this.subjectField,
    message: this.messageField,
    // These next 2 are not needed, but help deal with typedef issues in onSubmit().
    from_name: new FormControl(),
    access_key: new FormControl(),
  });

  onSubmit() {
    // Do not allow the form to submit if there are errors.
    // This prevents us from just relying on the CSS disabling the button.
    if (this.contactForm.invalid) {
      return;
    }

    // Extract out the provided form values then add the UUID to the email form.
    const object = this.contactForm.value;
    object.access_key = "0271c4f9-43f1-4d3f-84f2-d36f3f9a71c4";
    object.from_name = object.name;
    const jsonBody = JSON.stringify(object);

    // Send the POST with contents of the form and act on the response.
    this.formIsSubmitting = true;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: jsonBody
  })
  .then(async (response) => {
    this.formIsSubmitting = false;
      let json = await response.json();
      if (response.status == 200) {
          this.formSubmittedSuccessfully = true;
      } else {
        console.log('error submitting form: ');
        console.log(response);
      }
  })
  .catch(error => {
      this.formIsSubmitting = false;
      console.log('error submitting form: ');
      console.log(error);
  });
  }

}
