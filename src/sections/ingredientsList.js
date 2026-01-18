import RightImage from "../assets/video-thumbnail.png";

export function IngredientsList() {
  const ingredients = [
    {
      title: "🧴 منتج طبيعي 100%",
      subtitle: "خالٍ من الصبغات والكيميائيات الضارة",
    },
    {
      title: "🌿 عضوي وآمن للاستخدام اليومي",
      subtitle: "يحافظ على صحة شعرك",
    },
    {
      title: "💆‍️ يقلل الشيب تدريجيًا ويعيد لون الشعر",
      subtitle: "نتائج واضحة مع الاستخدام المنتظم",
    },
    {
      title: "✨ ينشط بصيلات الشعر ويقويها",
      subtitle: "تغذي فروة الرأس وتعطي الشعر لمعانًا صحيًا وطبيعيًا",
    },
  ];

  return `
<section class="container mx-auto pt-4 pb-7">
  <div class="flex flex-col md:flex-row rounded-3xl bg-white">

    <!-- Right Image -->
    <div class="w-full md:basis-1/2 rounded-t-[inherit] md:rounded-r-[inherit]">
      <img 
        src="${RightImage}" 
        alt="rightImage" 
        class="object-cover h-full w-full rounded-r-[inherit]"
      >
    </div>

    <!-- Content -->
    <div class="w-full md:basis-1/2 p-6 flex flex-col gap-6">

      <div class="flex flex-col gap-4">
        <span class="text-base tracking-normal text-yellow leading-[1.56]">أفضل المجموعات</span>
        <h2 class="font-din-arabic-medium font-medium">
          أعيد للشعر لونه الطبيعي واستعد ثقتك بنفسك
        </h2>
      </div>

      <ol class="list-none space-y-4 mt-6">
        ${ingredients
          .map(
            (item, idx) => `
              <li class="relative font-din-arabic-medium text-2xl font-medium tracking-normal">
                
                <!-- Number -->
                <span class="absolute right-0 top-0 font-din-arabic-bold font-bold text-base leading-6">
                  ${String(idx + 1).padStart(2, "0")}.
                </span>

                <!-- Content -->
                <div class="flex flex-col gap-2 pr-10">
                  <span class="font-din-arabic-medium text-2xl tracking-normal font-medium leading-[1.46]">
                    ${item.title}
                  </span>
                  <span class="font-din-arabic text-base font-normal text-dark-gray leading-[1.56]">
                    ${item.subtitle}
                  </span>
                </div>

                ${
                  idx !== ingredients.length - 1
                    ? `<span class="block h-px bg-yellow my-6"></span>`
                    : ""
                }
              </li>
            `
          )
          .join("")}
      </ol>

    </div>
  </div>
</section>
  `;
}
