import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage{

  constructor(private router:Router) {

  }

  slides = [
    {
      title: "Hi, My name is Sérgio",
      description: "I am currently studying Systems Analysis and Development at UNIFACS and I have a degree in Computer Science at the Federal Institute of Bahia - Camaçari campus. I'm 21 years old, I'm single and I live in Salvador - BA. I consider myself a curious young person, eager to learn to become a better professional and grow with those who support me. I would say that, besides my curiosity, one of my greatest characteristics is the resilience to remain firm in my goals without ever giving up.",
      image: "../../assets/imgs/ica-slidebox-img-1.png"
    },
    {
      title: "Soccer",
      description: "From the small taste of soccer, soccer is an indescribable passion.",
      image: "../../assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "Developer",
      description: "Developing has always been a passion and what makes me so focused and committed, programming for me is the msm thing to play, very happy to live this moment",
      image: "../../assets/imgs/ica-slidebox-img-3.png",
    }
  ];

   goToTabsPage(){
      this.router.navigateByUrl('/tabs/feed')
   }


}
