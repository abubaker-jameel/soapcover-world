import "./style.css";
import { Header } from "./header";
import { Hero } from "./sections/hero";
import { initHeroSwiper } from "./swiper-init";
import { BannerCards } from "./sections/bannerCards";
import { ProductImage } from "./sections/productImage";
import { CTABanner } from "./sections/ctaBanner";
import { ProductCart } from "./sections/productCart";
import { Video } from "./sections/video";
import { initVideo } from "./video-init";
import { IngredientsList } from "./sections/ingredientsList";
import { Blog } from "./sections/blog";
import { Footer } from "./sections/footer";
import { Testimonial } from "./sections/testimonial";
import { initTestimonialSwiper } from "./init-testimonial-swiper";

document.querySelector("#app").innerHTML = `
   ${Header()}

  <main class="font-din-arabic">
    ${Hero()}
    ${BannerCards()}
    ${ProductImage()}
    ${CTABanner()}
    ${ProductCart()}
    ${IngredientsList()}
    ${Video()}
    ${Testimonial()}
    ${Blog()}
    ${Footer()}
  </main>
`;

document.addEventListener("DOMContentLoaded", () => {
  initHeroSwiper();
  initTestimonialSwiper();
  initVideo();
});
