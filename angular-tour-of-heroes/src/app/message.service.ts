import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];

  add(message: string){ //adds a message to the cache
    this.messages.push(message);
  }

  clear(){ //clears the cache
    this.messages = [];
  }
  constructor() { }
}
