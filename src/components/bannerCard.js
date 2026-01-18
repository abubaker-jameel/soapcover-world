import clsx from "clsx";

export function BannerCardComponent({
  title = "Default Title",
  subtitle = "Default Subtitle",
  image = "--small-banner-left",
  ctaText = "اكتشف المزيد",
  className = "",
} = {}) {
  return `
    <div class="${clsx(
      "flex flex-col justify-between p-6 rounded-3xl bg-cover bg-center bg-no-repeat min-h-[16.125em] text-white",
      className
    )}" style="background-image: var(${image});">
      <div>
        <span class="md:font-din-arabic-bold md:font-bold font-normal text-base text-white/80 leading-none tracking-normal">
          ${subtitle}
        </span>
        <h2 class="font-din-arabic-medium md:text-4xl text-xl font-medium text-white leading-[1.3889] tracking-normal">
          ${title}
        </h2>
      </div>
      <div>
        <span class="font-din-arabic-medium text-base font-medium text-white leading-none tracking-normal">
          ${ctaText}
        </span>
      </div>
    </div>
  `;
}
