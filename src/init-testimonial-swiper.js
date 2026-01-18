// Import Swiper bundle which already includes all modules
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";

export function initTestimonialSwiper() {
  const testimonialSwiperEl = document.querySelector(".testimonial-swiper");
  if (!testimonialSwiperEl) return;

  // Initialize Swiper
  new Swiper(testimonialSwiperEl, {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: false,
    slideToClickedSlide: true,
    // Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive
    breakpoints: {
      0: { slidesPerView: 1.43 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
