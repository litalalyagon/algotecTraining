import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-messagges',
  templateUrl: './messagges.component.html',
  styleUrls: ['./messagges.component.css']
})
export class MessaggesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
