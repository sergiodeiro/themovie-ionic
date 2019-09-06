import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "843c7c86f44282f1b092dca4b0582700";
  private movie = "movie";
  private type ="popular";

  constructor(public http:HttpClient) { }

    getLastestMovies(): Observable<any>{
        return this.http.get(`${this.baseApiPath}/${this.movie}/${this.type}?api_key=${this.apiKey}`)
        /*.pipe(
          map(results => {
            console.log('Raw',results);
          })
        )*/
    }


}
