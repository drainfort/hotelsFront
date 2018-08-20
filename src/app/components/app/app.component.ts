import { Component, Inject, OnInit } from '@angular/core';
import HotelServiceImpl from '../../services/hotel/hotel.service';
import { HotelService } from '../../services/hotel/hotel.service.interface';
import Filter from '../../models/filter.model';
import Hotel from '../../models/hotel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'hotelsFront';
  hotels: Array<Hotel> = [];
  isOpen: Boolean = true;
  nameFilter: Filter<string>;
  starFilter: Filter<string>;
  activeCombos: Array<Boolean> = [];
  starArray: Array<number> = [0,5,4,3,2,1];

  constructor(@Inject(HotelServiceImpl) private hotelService: HotelService){
    this.nameFilter = new Filter<string>();
    this.nameFilter.name = "name";
    this.nameFilter.value = "";
    this.starFilter = new Filter<string>();
    this.starFilter.name = "stars";
    this.starFilter.value = "";
    for(let i = 0; i<6;i++){
      this.activeCombos.push(false);
    }
    this.activeCombos[0]=true;
  }

  ngOnInit() {
    this.getAll([]);
  }

  close() {
    this.isOpen = !this.isOpen;
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  /**
   * Method to search list of hotels by name
   */
  searchByName() {
    let array = [];
    if(this.nameFilter.value!=""){
      array.push(this.nameFilter);
    }
    this.getAll(array);
  }

  /**
   * Method to get all hotels
   * @param filters Filters to be applied
   */
  getAll(filters: Array<Filter<any>>){
    this.hotelService.getAll(filters)
      .subscribe(
        (hotelsResponse: Array<Hotel>) => {
          this.hotels = hotelsResponse;
        },
        () => {

        }
      );
  }

  /**
   * Method when a checkbox of the stars is checked
   * @param stars Star that was checked
   */
  checkStars(stars: number){
    let array = [];
    if(stars==0){
      for(let i = 1; i<6;i++){
        this.activeCombos[i] = false;
      }
      this.starFilter.value =  "";
      this.activeCombos[0] = true;
    }
    else{
      this.activeCombos[0] = false;
      let value = "";
      for(let i = 1; i<6;i++){
        if(this.activeCombos[i])
          value+= this.starArray[i]+","; 
      }
      this.starFilter.value =value;
      array.push(this.starFilter);
    }
    this.getAll(array);
  }
}
