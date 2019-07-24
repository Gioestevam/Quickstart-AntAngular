import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private message: NzMessageService) { }

  showMessage(type, text) {
    this.message.create(type, text);
  }
}
