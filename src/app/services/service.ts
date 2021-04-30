import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
//servicio que obtiene los datos de los productos en venta

export class Service {
	getIndicator (address: string): Promise<any> {
    	return this.request.get( address ).then((res) => {
			return res;
		}, (err) => {
			console.log(err);
		});
    }

	constructor(
		private request: RequestService ) { }
}