import { Component, OnInit } from '@angular/core';
import {Service} from '../services/service';
import { faCoffee, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  faConfing = faInfoCircle;
  constructor(public service: Service) {}
  dataValues:any = []; //For values
  ngOnInit(): void {
  	this.indicatorFunction();
  }
  indicatorFunction() {
  	this.service.getIndicator("").then(data=> {
  		console.log(data);
  		for(let key in data) { 
  			if (typeof data[key] === 'object'){
  				this.dataValues.push(data[key]);
  			}		    
		 }
		 console.log(this.dataValues)
 	}, (err) => {
	    console.error(err)
	    console.log('Ocurrió un error');
	});

  }

    	


}
