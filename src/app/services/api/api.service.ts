import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { Livingroom } from '../../models/livingroom/livingroom.model';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

   private livingroomUrl = 'api/livingroom';  // URL to web api

  constructor(private http: Http) { }

  getLivingroom(): Observable<Livingroom[]> {
    return this.http.get(this.livingroomUrl)
               .map((res:Response) => res.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
