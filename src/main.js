import "./style.css";
import page from "page";

import { Header } from "./header";
import { Hero } from "./sections/hero";
import { initHeroSwiper } from "./swiper-hero-init";
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
import { Features } from "./sections/features";
import { Comparision } from "./sections/comparison";
import { Cart } from "./sections/cart";

// ---------- Route functions ----------

// Home Page (all components)
function HomePage() {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main class="font-din-arabic">
      ${Hero()}
      ${BannerCards()}
      ${ProductImage()}
      ${CTABanner()}
      ${ProductCart()}
      ${Features()}
      ${Comparision()}
      ${IngredientsList()}
      ${Video()}
      ${Testimonial()}
      ${Blog()}
      ${Footer()}
    </main>
  `;

  // Initialize any JS needed for sections
  initHeroSwiper();
  initTestimonialSwiper();
  initVideo();
}

// Cart Page (just cart section, can add Header/Footer too if needed)
function CartPage() {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main class="font-din-arabic">
        ${Cart()}
    </main>
    ${Footer()}
  `;
}

// 404 Page
function NotFoundPage() {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main class="font-din-arabic">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
    ${Footer()}
  `;
}

// ---------- Routes ----------
page("/", HomePage);
page("/cart", CartPage);
page("*", NotFoundPage);
page();

// Handle SPA navigation on anchor click
document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    page.show(e.target.getAttribute("href"));
  }
});
