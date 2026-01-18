import ChevronLeft from "../assets/chevron-left.svg?raw";
import ChevronRight from "../assets/chevron-right.svg?raw";
import LeftQuotes from "../assets/left-quotes-sign.svg?raw";
import Ratings4Stars from "../assets/ratings-4.svg?raw";

const reviews = [
  {
    Ratings: Ratings4Stars,
    text: "كنت أعاني من الشيب المبكر، ومع SoapCover لاحظت فرق كبير بعد الاستخدام المنتظم. شعري أصبح طبيعي اللون ولامع!",
  },
  {
    Ratings: Ratings4Stars,
    text: "منتج طبيعي وآمن، استخدمه يوميًا على شعري ولحيتي، والنتيجة مذهلة. أنصح كل من يعاني من الشيب بتجربته.",
  },
  {
    Ratings: Ratings4Stars,
    text: "منتج طبيعي وآمن، استخدمه يوميًا على شعري ولحيتي، والنتيجة مذهلة. أنصح كل من يعاني من الشيب بتجربته.",
  },
  {
    Ratings: Ratings4Stars,
    text: "منتج طبيعي وآمن، استخدمه يوميًا على شعري ولحيتي، والنتيجة مذهلة. أنصح كل من يعاني من الشيب بتجربته.",
  },
];

export function Testimonial() {
  return `
        <section class="container mx-auto py-6 md:py-7">
            <div class="flex flex-col gap-8">

                <div class="flex items-center justify-between">
                    <div>
                        <h3>آراء العملاء</h3>
                        <p class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">بيتم استعراض بعض آراء وتعليقات المستخدمين</p>
                    </div>

                    <div class="flex items-center justify-between gap-2 relative">
                        <span class="swiper-button-prev inline-block h-[2.875em]! w-[2.875em]! bg-white text-dark-gray! p-3.75 rounded-full ring-1 ring-lightest-gray ">
                            ${ChevronRight}
                        </span>
                        <span class="swiper-button-next inline-block h-[2.875em]! w-[2.875em]! bg-white text-dark-gray! p-3.75 rounded-full ring-1 ring-lightest-gray">
                            ${ChevronLeft}
                        </span>
                    </div>
                </div>

                <!-- Slider -->  
            <div class="swiper testimonial-swiper w-full">
                <div class="swiper-wrapper">
                    ${reviews
      .map(
        (review) => `
                    <div class="w-auto swiper-slide bg-white p-6 flex flex-col gap-4 rounded-sm">
                        <div class="flex items-center justify-between">
                        <span class="inline-block h-3.25">${review.Ratings}</span>
                        <span class="inline-block h-[1.728em] w-8">${LeftQuotes}</span>
                        </div>
                        <p class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">
                        "${review.text}"
                        </p>
                    </div>
                    `
      )
      .join("")}
                </div>
            </div>

 

            </div>
        </section>
    `;
}
