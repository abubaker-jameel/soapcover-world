import { Button } from "../components/button";

export function Hero() {
  return `
    <section>
      <div class="swiper hero-swiper relative text-white">

        <div class="swiper-wrapper">

          <!-- Slide 1 -->
          <div class="swiper-slide">
            <div class="relative py-[10.313em] bg-(image:--hero-banner-desktop) bg-cover bg-center bg-no-repeat">
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

          <!-- Slide 2 -->
          <div class="swiper-slide">
            <div class="relative py-[10.313em] bg-(image:--hero-banner-desktop) bg-cover bg-center bg-no-repeat">
              <div class="absolute inset-0 bg-black/48"></div>

              <div class="relative z-10 flex flex-col items-center gap-8">
                <h1 class="font-din-arabic-bold text-5xl text-center">
                  حل طبيعي 100%
                </h1>

                <p class="text-base text-center max-w-[40.875em]">
                  تركيبة عضوية تساعد على استعادة اللون الطبيعي للشعر بدون ضرر.
                </p>

                ${Button()}
              </div>
            </div>
          </div>

        </div>

        <!-- Navigation -->

        <div class="absolute left-1/5 top-1/3 -translate-y-1/5 h-[3.75em] w-[3.75em] border border-white rounded-full">l</div>
        <div class="absolute right-1/5 top-1/3 -translate-y-1/5 h-[3.75em] w-[3.75em] border border-white rounded-full">r</div>


        <!-- Pagination -->
        <div class="swiper-pagination"></div>

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
