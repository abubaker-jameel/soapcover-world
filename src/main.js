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
  </main>
`;

document.addEventListener("DOMContentLoaded", () => {
  initHeroSwiper();
  initVideo();
});
