import { Button } from "../components/button";
import OverlayBanner from "../assets/banner-small-overlay-image-desktop.png";

export function CTABanner() {
  return `
        <section class="py-10 px-[1.375em] bg-(image:--small-banner-desktop) bg-cover bg-center bg-no-repeat">
        <div class="container mx-auto flex flex-col gap-12 lg:flex-row">
            
            <div class="flex flex-col items-center lg:items-start justify-between gap-8 lg:basis-[36.21%]">
            <div class="flex flex-col gap-4">
                <h1 class="font-din-arabic-medium text-center lg:text-right text-4xl tracking-normal md:text-4xl lg:text-5xl lg:font-din-arabic-bold text-white">
                أفضل العروض 2026
                </h1>

                <p class="font-normal text-sm text-center lg:text-right md:text-sm lg:text-base tracking-normal text-white">
                صابونة SoapCover توفّر لك الحل الطبيعي لإزالة الشيب واستعادة لون الشعر بدون صبغات كيميائية، مع خصومات مميزة لفترة محدودة.
                </p>
            </div>

            <div>
                ${Button({ label: "اكتشف المزيد" })}
            </div>
            </div>

            <div class="relative w-full pt-[56%] lg:pt-[14.6%] rounded-3xl lg:basis-[59.71%]">
            <img
                src=${OverlayBanner}
                alt="overlay-banner"
                class="absolute top-0 left-0 w-full h-full object-cover rounded-[inherit]"
            >
            </div>

        </div>
        </section>
    `;
}
