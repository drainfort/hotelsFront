import Hotel from "../../models/hotel.model";
import Filter from "../../models/filter.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export interface HotelService {

    /**
     * Get all hotels
     * @param filters Filters to apply 
     */
    getAll(filters: Array<Filter<any>>): Observable<Array<Hotel>>;
}
