import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function initHeroSwiper() {
  const swiperEl = document.querySelector(".hero-swiper");
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    modules: [Navigation, Pagination], // <-- important
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next-hero",
      prevEl: ".swiper-button-prev-hero",
    },
  });
}
