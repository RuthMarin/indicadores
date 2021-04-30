import { Component, OnInit } from '@angular/core';
import {Service} from '../services/service';


@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
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
 	});

  }

    	


}
