import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  autoHeight: true,
});
