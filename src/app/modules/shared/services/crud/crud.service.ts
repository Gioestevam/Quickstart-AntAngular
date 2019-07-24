import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get(this.url + '/' + endpoint, { headers: new HttpHeaders(reqOpts)});
  }

  post(endpoint: string, body: any, reqOpts?: {}) {
    return this.http.post(this.url + '/' + endpoint, body, {headers: new HttpHeaders(reqOpts)});
  }

  put(endpoint: string, body: any, reqOpts?: {}) {
    return this.http.put(this.url + '/' + endpoint, body, {headers: new HttpHeaders(reqOpts)});
  }

  delete(endpoint: string, reqOpts?: {}) {
    return this.http.delete(this.url + '/' + endpoint ,{headers: new HttpHeaders(reqOpts)});
  }

  patch(endpoint: string, body: any, reqOpts?: {}) {
    return this.http.patch(this.url + '/' + endpoint, body, {headers: new HttpHeaders(reqOpts)});
  }
}
