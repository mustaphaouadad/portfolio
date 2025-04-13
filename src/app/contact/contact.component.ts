import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
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

    
    this.messageEnvoye = true;

   
    this.formData = { name: '', email: '', message: '' };

    
    setTimeout(() => {
      this.messageEnvoye = false;
    }, 5000);
  }
}
