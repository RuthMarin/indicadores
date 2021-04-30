import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Service} from '../services/service';

@Component({
  selector: 'app-list-indicator',
  templateUrl: './list-indicator.component.html',
  styleUrls: ['./list-indicator.component.css']
})
export class ListIndicatorComponent implements OnInit {
  param: any = "";
  symb = "";
  dataValues:any = []; //For values
  fecha:any;
  unidad:any;
  nombre:any;
  sucess = true;

  constructor(private activatedRoute: ActivatedRoute, public service: Service) { }

  ngOnInit(): void {
  	//https://mindicador.cl/api/uf/03-04-2021
	let date = new Date()
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()
	if(month < 10){
	  this.fecha = `${day}-0${month}-${year}`;
	}else{
	  this.fecha = `${day}-${month}-${year}`;
	}
  	this.activatedRoute.paramMap.subscribe(params => {
		this.param = params.get('id') !== null ? params.get('id') : ""
  		this.service.getIndicator(this.param + '/' + this.fecha).then(data=> {
  			this.dataValues = data.serie;
  			if (!data.serie || data.serie .length === 0 ) {
  				console.log('No hay datax')
  				this.sucess = false;
  			}else{
  				console.log(data.serie)
	  			this.unidad = data.unidad_medida;
	  			this.nombre = data.nombre;
	  			if (data.unidad_medida.toLowerCase()  == "dólar" || data.unidad_medida.toLowerCase()  == "pesos" ) {
	  				this.symb = "$"
	  			}
	  			if (data.unidad_medida.toLowerCase()  == "porcentaje") {
	  				this.symb = "%"
	  			}
	  			console.log(data);

  			}
  			
  		});
  	});
   }
}
