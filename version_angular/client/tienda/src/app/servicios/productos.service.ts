import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Productos } from '../modelos/productos';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductosService {
	private headers = new Headers({'Content-Type':'application/json'});
	private url = 'http://localhost:3000/productos';

  	constructor(private http: Http) { }

  	getProductos():Observable<Productos[]>{
  		let url = `${this.url}`;
  		return this.http.get(url)
  				.map(r => r.json())
  				.catch(this.handleError);
  	}

  	private handleError(error: Response | any) {
  		let errMsg: string;
  		if (error instanceof Response) {
  			let body = error.json() || '';
  			let err = body.error || JSON.stringify(body);
  			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  		}else{
  			errMsg = error.message ? error.message : error.toString();
  		}
  		return Observable.throw(errMsg);
  		
  	}
}
