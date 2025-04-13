import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  messageEnvoye = false;

  onSubmit() {
    console.log('Form data:', this.formData);

    // simulation d’envoi
    this.messageEnvoye = true;

    // vider les champs
    this.formData = { name: '', email: '', message: '' };

    // masquer le message après quelques secondes (optionnel)
    setTimeout(() => {
      this.messageEnvoye = false;
    }, 5000);
  }
}
