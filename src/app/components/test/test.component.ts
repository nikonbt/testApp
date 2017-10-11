import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 menuItems:MenuItems[];
 panoramica:Panoramica[];

   constructor(private dataService:DataService) {
  	console.log("Constructor ran... ");

   }

  ngOnInit() {

  	this.dataService.getMenu().subscribe((menuItems)=> {
  		//console.log(posts);
  		this.menuItems=menuItems;

  		});

  	this.dataService.getPanoramica().subscribe((panoramica)=> {
  		//console.log(posts);
  		this.panoramica=panoramica;

  		});
  }

}

interface MenuItems{
	item:string,
	subitems:string[]
}

interface Panoramica{
	amount:number,
	description:string,
	title:string
}