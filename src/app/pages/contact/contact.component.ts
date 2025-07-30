import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  showModal = false;

    constructor(private toastr: ToastrService) {}

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

   isLoading = false;
showDialog = false;

sendEmail() {
  if (!this.formData.name || !this.formData.email || !this.formData.message) {
    alert('Please fill all fields');
    return;
  }

  this.isLoading = true;

  emailjs.send('service_hdyl7s4', 'template_22yqgxm', {
    from_name: this.formData.name,
    from_email: this.formData.email,
    message: this.formData.message,
  }, '-vdOY0OQ1S8vRD0O0')
  .then(() => {
    this.isLoading = false;
    this.showDialog = true;
    this.clearForm();

    // ✅ Auto-close popup and dialog after 3 seconds
    setTimeout(() => {
      this.showPopup = false;
      this.showDialog = false;
    }, 3000);
  })
  .catch((err) => {
    this.isLoading = false;
    alert('Failed to send message. Try again later.');
    console.error(err);
  });
}


closeDialog() {
  this.showDialog = false;
  this.closeModal(); // Close enquiry popup too
}
showSuccessDialog = false;
showPopup: boolean = false;

showSuccessPopup() {
  this.showSuccessDialog = true;
  setTimeout(() => {
    this.showSuccessDialog = false;
  }, 3000); // auto-close after 3s
}

   clearForm() {
    this.formData = {
      name: '',
      email: '',
      subject:'',
      message: ''
    };
  }
}
