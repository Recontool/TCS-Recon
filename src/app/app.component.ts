/*import { Component } from '@angular/core';*/
import {Component,OnInit} from '@angular/core';
import {MyAppService} from './app.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'    
})
export class AppComponent implements OnInit{
    
    constructor(private myService:MyAppService){}
    
    tableNames:Observable<String[]>;
    selectedTable:String;
    columnDetails:Observable<String[]>;
    
    ngOnInit():void{
        
        this.tableNames=this.myService.getTableDetails();
    }
    
    onSelectTable(newTable)
    {
    
    this.selectedTable=newTable;
    alert("Table Select-"+this.selectedTable);
    this.columnDetails=this.myService.getColumnDetails();
    }
}
