import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  formData = [
    { for: "name", control: "input", type: "text", label: "name", placeholder: "Enter name", id: "name", control_name: "name" },
    { for: "emails", control: "input", type: "text", label: "emails", placeholder: "Enter emails", id: "emails", control_name: "emails" },
    { for: "contact", control: "input", type: "text", label: "contact", placeholder: "Enter contact", id: "contact", control_name: "contact" },
    { for: "feedback", control: "input", type: "text", label: "feedback", placeholder: "Enter feedback", id: "feedback", control_name: "feedback" }
  ]

  customForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    emails: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.minLength(10)]],
    feedback: ['', [Validators.required, Validators.minLength(50)]]
  });

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpService.postHttp("/details.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
      });

  }
}
