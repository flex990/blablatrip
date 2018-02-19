import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

	constructor(private location: Location) { }

	ngOnInit()
	{
		  
	}
	
	goBack = function ()
	{
		this.location.back();
	}

}
