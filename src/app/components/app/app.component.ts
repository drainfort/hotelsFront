import { Component, Inject } from '@angular/core';
import HotelServiceImpl from '../../services/hotel/hotel.service';
import { HotelService } from '../../services/hotel/hotel.service.interface';
import Filter from '../../models/filter.model';
import Hotel from '../../models/hotel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelsFront';

  constructor(@Inject(HotelServiceImpl) private hotelService: HotelService){
    hotelService.getAll([])
    .subscribe(
      (agencyResponse: Array<Hotel>) => {
        console.log("", agencyResponse)
      },
      () => {
        
      }
    );
  }
}
