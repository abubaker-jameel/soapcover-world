import ComparisonImage from "../assets/comparison-image-desktop.png";
import DollarSignThin from "../assets/dollar-sign-thin.svg?raw";

export function Comparision() {
  return `
        <section class="container mx-auto py-4">
            <div class="bg-white p-6 rounded-3xl flex flex-col gap-6 md:flex-row">

                <div class="flex flex-col justify-between w-full md:basis-1/2">
                    <div class="flex flex-col gap-4">
                        <span class="text-base tracking-normal font-normal leading-[1.5625] text-yellow">قارن</span>
                        <div class="flex flex-col gap-2">
                            <h2 >صابونة SoapCover</h2>
                            <p class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">مصنوعة من مكونات عضوية 100% وخالية من المواد الكيميائية، تم تطويرها لتقليل الشيب واستعادة اللون الطبيعي للشعر بشكل تدريجي وآمن للاستخدام اليومي.</p>
                        </div>
                    </div>
    
                    <a href="#" class="font-din-arabic-medium text-base tracking-normal font-medium leading-[1.5625] text-yellow underline">اكتشف المزيد</a>
                </div>

               <div class="flex flex-col gap-4 w-full md:basis-1/2">
                    <div class="relative w-full pt-[20.5em] rounded-2xl">
                    <img
                        src=${ComparisonImage}
                        alt="comparison-image"
                        class="absolute top-0 left-0 w-full h-full object-cover rounded-[inherit]"
                    >

                    <!-- Top-left text -->
                    <span class="absolute top-4 left-4 text-white text-base tracking-normal font-normal leading-[1.5625]">
                        بعد
                    </span>

                    <!-- Top-right text -->
                    <span class="absolute top-4 right-4 text-white text-base tracking-normal font-normal leading-[1.5625]">
                        قبل
                    </span>
                    </div>


                    <div class="flex items-center justify-between">
                        <span class="text-xl font-normal tracking-normal underline leading-normal">السعر بعد العرض</span>
                        <div class="flex items-center gap-[0.297em]">
                            <span class="font-din-arabic-bold text-2xl font-bold tracking-normal leading-[147%]">69.00</span>
                            <span>${DollarSignThin}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
