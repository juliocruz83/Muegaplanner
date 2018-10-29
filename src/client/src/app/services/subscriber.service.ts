import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from '@muega-models/Subscriber' ;

@Injectable()
export class SubscriberService {
  domain: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  
  getSubscribers() {
    return this.http.get<Subscriber[]>(`${this.domain}/api/subscribers`);
  }

  getSubscriberByName(name) {
    return this.http.get<Subscriber>(`${this.domain}/api/subscribers/byname/${name}`);
  }
 
  addSubscriber(newSubscriber: Subscriber) {
    return this.http.post<Subscriber>(`${this.domain}/api/subscribers`, newSubscriber);
  }

  deleteSubscriber(id) {
    return this.http.delete<Subscriber>(`${this.domain}/api/subscribers/${id}`);
  }

  updateSubscriber(newSubscriber) {
    return this.http.put<Subscriber>(`${this.domain}/api/subscribers/${newSubscriber._id}`, newSubscriber);
  }
}