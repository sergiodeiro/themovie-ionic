import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MovieService
  ]
})
export class FeedPage implements OnInit {

  //name: string = "Sérgio";

  /*public objeto_feed = {
    title: "Sérgio Deiró",
    data: "22 de Abril, 1998",
    description:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    time: "11h ago"
  }*/

  private lista_filmes = new Array<any>();

  constructor(private movieService: MovieService) { }



  ngOnInit() {
    this.movieService.getLastestMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(this.lista_filmes);
      }
    )
  }

}
