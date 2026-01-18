import { Button } from "../components/button";
import BlogImage1 from "../assets/blog-1.png";
import BlogImage2 from "../assets/blog-2.png";
import BlogImage3 from "../assets/blog-3.png";
import ChevronLeft from "../assets/chevron-left.svg?raw";

// Array of blog data
const blogs = [
  {
    title: "كيفية استخدام صابونة SoapCover للحصول على أفضل النتائج",
    description: `اغسل شعرك بالماء جيدًا، دلك الصابونة على فروة الرأس والشعر المبلل لبضع دقائق، ثم اشطف. الاستخدام اليومي يمنحك نتائج أسرع وأكثر وضوحًا.`,
    image: BlogImage3,
  },
  {
    title: "أفضل نصائح لتقليل الشيب المبكر",
    description: `تناول غذاء متوازن غني بالفيتامينات.
قلل من التوتر والإجهاد اليومي.
استخدم منتجات طبيعية وآمنة مثل SoapCover يوميًا للحفاظ على لون شعرك الطبيعي.`,
    image: BlogImage2,
  },
  {
    title: "فوائد استخدام SoapCover للشعر واللحية",
    description: `إعادة لون الشعر الطبيعي تدريجيًا
تغذية فروة الرأس ومنع تساقط الشعر
تعزيز لمعان وحيوية الشعر
آمنة للاستخدام اليومي ولجميع أنواع الشعر`,
    image: BlogImage1,
  },
];

// Blog card component
function BlogCard({ title, description, image }) {
  return `
    <div class="flex flex-col gap-4 align-top justify-between pt-7 pb-14">
        <div class="relative w-full pt-[16.125em] rounded-sm">
            <img src="${image}" alt="blog-image" class="absolute top-0 left-0 w-full h-full object-cover rounded-[inherit]">
        </div>

        <div class="flex flex-col grow gap-2">              
            <h5 class="font-din-arabic-bold font-bold leading-normal text-center">${title}</h5>
            <span class="inline-block text-base font-normal leading-[1.56] tracking-normal text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            ${description.replace(/\n/g, " ")}
            </span>        
        </div>

        ${Button()}
    </div>
  `;
}

// Main Blog section
export function Blog() {
  return `
    <section class="container mx-auto">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h4>أحدث المقالات</h4>
          <p class="text-base font-normal tracking-normal leading-[1.56]">
            تسوق احدث المنتجات المميزة المضافة جديد
          </p>
        </div>
        ${Button({ variant: "outline", size: "icon", rightIcon: ChevronLeft, rightIconClassName: "h-4 w-4 py-1 mr-2 text-[#0B0A0A]" })}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${blogs.map((blog) => BlogCard(blog)).join("")}
      </div>
    </section>
  `;
}
