import FeaturesSvg01 from "../assets/features-icon-1.svg?raw";
import FeaturesSvg02 from "../assets/features-icon-2.svg?raw";
import FeaturesSvg03 from "../assets/features-icon-3.svg?raw";

const features = [
  {
    icon: FeaturesSvg02,
    title: "الدفع عند الاستلام",
    text: "نوفر لك إمكانية الدفع بعد وصول المنتج إليك بكل أمان وراحة.",
  },
  {
    icon: FeaturesSvg01,
    title: "توصيل مجاني لجميع الطلبات",
    text: "نقوم بتوصيل طلبك دون أي رسوم إضافية أينما كنت داخل الدولة.",
  },
  {
    icon: FeaturesSvg03,
    title: "جودة مضمونة وتجربة موثوقة",
    text: "نلتزم بتقديم منتج أصلي مطابق للمواصفات وبأعلى معايير الجودة.",
  },
];

export function Features() {
  return `
    <section class="container mx-auto py-4 px-[1.375em]">
      <div class="bg-white p-8 rounded-2xl">
      <div class="flex flex-col gap-6 md:flex-row md:items-center">
          ${features
            .map(
              (feature, index) => `
            <div class="flex flex-col text-center md:text-start md:flex-row items-center gap-4">
              <span class="inline-block h-10 w-10">
                ${feature.icon}
              </span>
              <div class="flex flex-col gap-1">
                <h4>${feature.title}</h4>
                <p class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">
                  ${feature.text}
                </p>
              </div>
            </div>
            ${
              index < features.length - 1
                ? `<span class="h-px w-full bg-lightest-gray
                             md:w-px md:h-[4.375em]"></span>`
                : ""
            }
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
