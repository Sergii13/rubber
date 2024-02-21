import "swiper/css";
import "swiper/css/grid";
import Swiper from "swiper";
import { Grid, Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  let swiperWorks = document.querySelector(".works__slider");
  if (swiperWorks) {
    new Swiper(swiperWorks, {
      modules: [Navigation, Grid],
      spaceBetween: 44,
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      navigation: {
        prevEl: swiperWorks
          .closest(".works")
          .querySelector(".navigation__arrow--prev"),
        nextEl: swiperWorks
          .closest(".works")
          .querySelector(".navigation__arrow--next"),
      },
      breakpoints: {
        320: { spaceBetween: 16, slidesPerView: 2 },
        768: { spaceBetween: 24, slidesPerView: 3 },
        1199: { spaceBetween: 44, slidesPerView: 3 },
      },
    });
  }

  let swiperReviews = document.querySelector(".reviews__slider");
  if (swiperReviews) {
    new Swiper(swiperReviews, {
      modules: [Navigation],
      spaceBetween: 44,
      slidesPerView: 3,
      navigation: {
        prevEl: swiperReviews
          .closest(".reviews")
          .querySelector(".navigation__arrow--prev"),
        nextEl: swiperReviews
          .closest(".reviews")
          .querySelector(".navigation__arrow--next"),
      },
      breakpoints: {
        320: { spaceBetween: 16, slidesPerView: 1 },
        768: { slidesPerView: 2 },
        991: { spaceBetween: 24, slidesPerView: 3 },
        1199: { spaceBetween: 44, slidesPerView: 3 },
      },
    });
  }
});
