import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  contactForm!: FormGroup;
  emailSent: boolean = false; // Variable para controlar el mensaje de éxito

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.valid) {
      const service_id = environment.EMAILJS_SERVICE_ID;
      const template_id = environment.EMAILJS_TEMPLATE_ID;
      const public_key = environment.EMAILJS_USER_ID;

      let template_params = {
        from_name: this.contactForm.get("firstName")?.value,
        from_phone: this.contactForm.get("phone")?.value,
        from_email: this.contactForm.get("email")?.value,
        message: this.contactForm.get("message")?.value,
        to_name: 'Jdtex',
        to_email: 'administracion@jdtex.com.ar',
        to_email2:'danieltoccalino@jdtex.com.ar',
        to_email3: 'javiertoccalino@jdtex.com.ar'
      };

      emailjs.send(service_id, template_id, template_params, public_key).then(
        () => {
          this.emailSent = true; // Mostrar mensaje de éxito
          this.contactForm.reset(); // Reiniciar el formulario
          setTimeout(() => this.emailSent = false, 5000); // Ocultar el mensaje después de 5 segundos
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
    }
  }
}
