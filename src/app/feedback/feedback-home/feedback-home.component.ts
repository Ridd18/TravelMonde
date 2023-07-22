import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-feedback-home',
  templateUrl: './feedback-home.component.html',
  styleUrls: ['./feedback-home.component.css']
})
export class FeedbackHomeComponent {


  // const feedback = document.querySelector('.feedback__slider');
  // const feedback_offset = 300;
  
  // function feedbackUpdateHeight(height: number): void {
  //   if (!height) return false;
  //   feedback.style.height = `${height + feedback_offset}px`;
  // }
  
  // if (feedback) {
  //   feedbackUpdateHeight(feedback.querySelector('.feedback__item').offsetHeight);
  
  //   const feedback_slider = new Swiper(feedback, {
  //     direction: 'vertical',
  //     slidesPerView: 'auto',
  //     autoHeight: true,
  //     centeredSlides: true,
  //     spaceBetween: 30,
  //     grabCursor: true,
  //     loop: true,
  //     mousewheel: true,
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev'
  //     }
  //   });
  
  //   feedback_slider.on('slideChange', () => {
  //     setTimeout(() => {
  //       feedbackUpdateHeight(feedback_slider.slides[feedback_slider.activeIndex].offsetHeight);
  //     }, 300);
  //   });
  // }
}
