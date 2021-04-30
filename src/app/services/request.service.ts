import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RequestService {
//servicio http get
	public get(resource: any): Promise<any>{
		const url = 'https://mindicador.cl/api/' + resource ;
			const doRequest = () =>
				this.http.get(url, { })
					.toPromise()
					.then((res: any) => {
						return Promise.resolve(res);
					})
					.catch((ex) => {
						return Promise.reject(ex);
					});
	return doRequest();
	}
	constructor(private http: HttpClient) { }

}
