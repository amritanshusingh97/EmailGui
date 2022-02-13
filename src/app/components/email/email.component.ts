import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data ={
    to:"",
    subject:"",
    body:""
  }
  constructor(private emailService:EmailService, private snack :MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm(){

    if(this.data.to=='' || this.data.subject==''  || this.data.body=='' ){
      this.snack.open("Fields cannot be empty ..!!","ok",{duration:3000});
    }

    console.log("Form submitted..");
    console.log(this.data);

  this.emailService.sendEmail(this.data).subscribe(
  response=>{
  console.log(response);
  },
  error=>{
    console.log(error);
  }
)

  }
}
