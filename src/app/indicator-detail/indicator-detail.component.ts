import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Service} from '../services/service';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.css']
})
export class IndicatorDetailComponent implements OnInit {
  param: any = "";
  symb = "";
  dataValues:any = []; //For values
  title="";
  constructor(private activatedRoute: ActivatedRoute, public service: Service) { }

  ngOnInit(): void {
  	this.activatedRoute.paramMap.subscribe(params => {
		this.param = params.get('id') !== null ? params.get('id') : ""
  		this.service.getIndicator(this.param).then(data=> {
  			this.dataValues = data.serie;
  			console.log(data.unidad_medida)
  			this.title = this.param.toUpperCase();
  			if (data.unidad_medida.toLowerCase()  == "dólar" || data.unidad_medida.toLowerCase()  == "pesos" ) {
  				this.symb = "$"
  			}
  			if (data.unidad_medida.toLowerCase()  == "porcentaje") {
  				this.symb = "%"
  			}
  			console.log(data);
  		});
  	});
  }

}
