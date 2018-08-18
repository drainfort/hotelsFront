import Hotel from "../../models/hotel.model";
import Filter from "../../models/filter.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export interface HotelService {

    getAll(filters: Array<Filter<any>>): Observable<Array<Hotel>>;
}
