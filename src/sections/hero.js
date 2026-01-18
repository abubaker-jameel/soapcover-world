import ChevronRight from "../assets/chevron-right.svg?raw";
import ChevronLeft from "../assets/chevron-left.svg?raw";
import { Button } from "../components/button";
import ShoppingCart02 from "../assets/shopping-cart-02.svg?raw";
import ChevronLeftRough from "../assets/left-chevron-rough.svg?raw";

export function Hero() {
  return `
    <section class="">
      <div class="swiper hero-swiper relative text-white">

        <div class="swiper-wrapper">

          <!-- Slide 1 -->
          <div class="swiper-slide">
            <div class="relative bg-(image:--hero-banner-desktop) bg-cover bg-center bg-no-repeat min-h-dvh md:min-h-[38.5em] flex justify-center flex-col">
              <div class="absolute inset-0 bg-black/48"></div>

              <div class="relative z-10 flex flex-col items-center gap-8">
                <h1 class="md:font-din-arabic-bold md:text-5xl text-center font-din-arabic-medium text-4xl font-medium md:font-bold leading-[1.39]">
                  صابونة عضوية لإزالة الشيب
                </h1>

                <p class="md:text-base md:leading-[1.5625] text-sm leading-none text-center max-w-[40.875em]">
                  ودّع صبغات الشعر الكيميائية القاسية، ورحّب بـ SoapCover الحل
                  الطبيعي الخالي من الصبغات الذي يساعد على تجديد لون شعرك.
                </p>

                ${Button({ size: "icon", leftIcon: ShoppingCart02, rightIcon: ChevronLeftRough, leftIconClassName: "h-6 w-6 ml-[16.5px]", rightIconClassName: "h-6 w-6 mr-[16.5px] py-[0.328em]" })}
              </div>
            </div>
          </div>

          <!-- Slide 1 -->
          <div class="swiper-slide">
            <div class="relative bg-(image:--hero-banner-desktop) bg-cover bg-center bg-no-repeat min-h-[38.5em] flex justify-center flex-col">
              <div class="absolute inset-0 bg-black/48"></div>

              <div class="relative z-10 flex flex-col items-center gap-8">
                <h1 class="font-din-arabic-bold text-5xl text-center">
                  صابونة عضوية لإزالة الشيب
                </h1>

                <p class="text-base text-center max-w-[40.875em]">
                  ودّع صبغات الشعر الكيميائية القاسية، ورحّب بـ SoapCover الحل
                  الطبيعي الخالي من الصبغات الذي يساعد على تجديد لون شعرك.
                </p>

                ${Button()}
              </div>
            </div>
          </div>


        </div>

        <!-- Navigation -->
        <span class="swiper-button-prev-hero hidden absolute z-10 2xl:left-1/5 lg:left-1/10 top-1/2 -translate-y-1/2 h-[3.75em] w-[3.75em] border border-white rounded-full p-5.5 lg:flex items-center justify-center">${ChevronLeft}</span>
        <span class="swiper-button-next-hero hidden absolute z-10 2xl:right-1/5 lg:right-1/10 top-1/2 -translate-y-1/2 h-[3.75em] w-[3.75em] border border-white rounded-full p-5.5 lg:flex items-center justify-center">${ChevronRight}</span>


        <!-- Pagination -->
        <div class="swiper-pagination custom-pagination bottom-[3.313em]!"></div>

      </div>
    </section>
  `;
}

// export function Hero() {
//   return `
//     <section class="">
//       <div class="relative py-[10.313em] text-white bg-(image:--hero-banner-desktop) bg-cover bg-center bg-no-repeat">

//         <div class="absolute inset-0 bg-black/48"></div>

//         <div class="relative z-10 flex flex-col items-center justify-between gap-8">
//           <h1 class="font-din-arabic-bold text-5xl font-bold leading-none tracking-normal text-center">
//             صابونة عضوية لإزالة الشيب
//           </h1>
//           <p class="text-base font-normal leading-6 tracking-normal text-center max-w-[40.875em]">
//             ودّع صبغات الشعر الكيميائية القاسية، ورحّب بـ SoapCover
// الحل;
//             الطبيعي الخالي من الصبغات الذي يساعد على تجديد لون شعرك وإعادته إلى
//             مظهره الطبيعي اللامع.
//           </p>
//           ${Button()}
//         </div>

//         <div class="absolute left-1/5 top-1/3 -translate-y-1/5 h-[3.75em] w-[3.75em] border border-white rounded-full">l</div>
//         <div class="absolute right-1/5 top-1/3 -translate-y-1/5 h-[3.75em] w-[3.75em] border border-white rounded-full">r</div>

//       </div>
//     </section>
//   `;
// }
