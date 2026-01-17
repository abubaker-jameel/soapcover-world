import { Button } from "../components/button";
import OverlayBanner from "../assets/banner-small-overlay-image-desktop.png";

export function CTABanner() {
  return `
        <section class="py-10 bg-(image:--small-banner-desktop) bg-cover bg-center bg-no-repeat">
            <div class="container mx-auto flex gap-12">
                <div class="flex flex-col justify-between gap-8 basis-[36.21%]">
                    <div class="flex flex-col gap-4">
                        <h1 class="font-din-arabic-bold tracking-normal text-5xl font-bold text-white">أفضل العروض 2026</h1>
                        <p class="font-normal text-base tracking-normal text-white">صابونة SoapCover توفّر لك الحل الطبيعي لإزالة الشيب واستعادة لون الشعر بدون صبغات كيميائية، مع خصومات مميزة لفترة محدودة.</p>
                    </div>
                    <div>
                        ${Button({ label: "اكتشف المزيد" })}
                    </div>
                </div>

                <div class="relative w-full pt-[14.6%] rounded-3xl basis-[59.71%]">
                    <img src=${OverlayBanner} alt="overlay-banner" class="absolute top-0 left-0 w-full h-full object-cover rounded-[inherit]">
                </div>
            </div>
        </section>
    `;
}
