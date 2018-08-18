import { HotelService } from "./hotel.service.interface";
import { environment } from "../../../environments/environment";
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import Hotel from "../../models/hotel.model";
import Filter from "../../models/filter.model";

import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })
export default class HotelServiceImpl implements HotelService {

    api: string = environment.apiUrl;

    resource: string;

    httpClient: HttpClient;

    constructor(http: HttpClient) {
        this.httpClient = http;
        this.resource = "hotel";
    }

    /**
     * Get all hotels
     * @returns {Observable<Array<Hotel>>}
     */
    public getAll(filters: Array<Filter<any>>): Observable<Array<Hotel>> {
        let filtersString = "";
        if(filters.length >0){
            filtersString += "?"
            for(let filter of filters){
                filtersString+= filter.name+"="+filter.value
            }
        }
        
        return this.httpClient.get(this.getResourcePath()+filtersString).pipe(map((res: Array<Hotel>) => <Array<Hotel>> res));
            
    }

    public getResourcePath(): string {
        return this.api + this.resource;
      }

}