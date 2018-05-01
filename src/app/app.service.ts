import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
//import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class MyAppService{
    
    private actionUrl: string;

    constructor(private http: Http){
    }
    getTableDetails():Observable<String[]>{
        
        return this.http.get('/api/getTableNames')
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
        
    }
    getColumnDetails(tableId:string):Observable<String[]>{
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        let myParams = new URLSearchParams();
        myParams.append('id', tableId);          
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get('/api/getColumnDetails',options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);

        
    }
    private extractData(res: Response) {
        let body = res.json();
            return body;
     }
     private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
     }
}