import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IEvent } from '../interfaces/events';

@Injectable()
export class EventService {
   private _eventsurl='data/events.json';
   constructor(private _http: Http){}

   getproducts(): Observable<IEvent[]> {
      return this._http.get(this._eventsurl)
      .map((response: Response) => <IEvent[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
