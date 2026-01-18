import { BannerCardComponent } from "../components/bannerCard";

const banners = [
  {
    title: "تقلل الشيب تدريجيًا وتعيد اللون الطبيعي",
    subtitle: "صابونة إزالة الشيب",
    image: "--small-banner-right",
    ctaText: "اكتشف المزيد",
  },
  {
    title: "مظهر طبيعي بدون صبغات كيميائية",
    subtitle: "صابونة عضوية للشعر واللحية",
    image: "--small-banner-left",
    ctaText: "اكتشف المزيد",
  },
];

export function BannerCards() {
  return `
    <section class="container mx-auto my-12 px-[1.375em]">
      <div class="flex flex-col gap-6 sm:flex-row">
        ${banners
          .map(
            (b) =>
              `<div class="w-full sm:w-1/2">${BannerCardComponent(b)}</div>`
          )
          .join("")}
      </div>
    </section>
    `;
}
