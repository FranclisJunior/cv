import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any = {};

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void{
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [],
      message: ['', Validators.required]
    });
  }

  sendEmail(): void {
    alert('Email sent');
  }

}
