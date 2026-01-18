import MessageSvg from "../assets/message.svg?raw";
import { Button } from "../components/button";
import { Input } from "../components/input";
import FacebookSvg from "../assets/facebook.svg?raw";
import InstagramSvg from "../assets/instagram.svg?raw";
import YoutubeSvg from "../assets/youtube.svg?raw";
import TwitterSvg from "../assets/twitter.svg?raw";
import SnapchatSvg from "../assets/snapchat.svg?raw";
import WhatsappSvg from "../assets/whatsapp.svg?raw";
import SmartPhoneSvg from "../assets/smart-phone-01.svg?raw";
import ArrowLeftSvg from "../assets/arrow-left.svg?raw";

export function Footer() {
  const socialIcons = [
    { name: "facebook", icon: FacebookSvg, href: "#" },
    { name: "instagram", icon: InstagramSvg, href: "#" },
    { name: "twitter", icon: TwitterSvg, href: "#" },
    { name: "youtube", icon: YoutubeSvg, href: "#" },
    { name: "snapchat", icon: SnapchatSvg, href: "#" },
  ];

  const contactItems = [
    {
      label: "واتساب :",
      value: "+971 50 796 7166",
      href: "#",
      icons: [WhatsappSvg, ArrowLeftSvg],
    },
    {
      label: "موبايل :",
      value: "+971 50 796 7166",
      href: "#",
      icons: [SmartPhoneSvg, ArrowLeftSvg],
    },
    {
      label: "البريد :",
      value: "info.cs@ugurme.com",
      href: "#",
      icons: [WhatsappSvg, ArrowLeftSvg],
    },
  ];

  //   footer main links
  const contactItemsWithNoIcons = [
    {
      label: "واتساب :",
      value: "+971 50 796 7166",
      href: "#",
    },
    {
      label: "موبايل :",
      value: "+971 50 796 7166",
      href: "#",
    },
    {
      label: "البريد :",
      value: "info.cs@ugurme.com",
      href: "#",
    },
  ];

  const importantLinks = [
    {
      label: "من نحن",
      href: "#",
    },
    {
      label: "ساسية الخصوصية",
      href: "#",
    },
    {
      label: "الشروط والاحكام",
      href: "#",
    },
    {
      label: "الدعم الفنى",
      href: "#",
    },
  ];

  const accountLinks = [
    {
      label: "حسابى",
      href: "#",
    },
    {
      label: "طلباتى",
      href: "#",
    },
    {
      label: "سلة المشتريات",
      href: "#",
    },
    {
      label: "المفضلة",
      href: "#",
    },
  ];

  return `
    <footer class="bg-white">
            <!-- Newsletter -->
        <section class="footer-newsletter container mx-auto py-9 px-[1.375em]">
            <!-- subscription form -->

            <div class="flex flex-col md:flex-row gap-6">

                <div class="flex items-center gap-4 basis-1/3">
                    <div class="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 shrink-0">
                        ${MessageSvg}
                    </div>
                    <div class="flex flex-col gap-1">
                        <h4>الاشتراك فى النشرة البريدية</h4>
                        <p class="text-sm leading-none tracking-normal font-normal">انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</p>
                    </div>
                </div>
                
                <div class="flex flex-col gap-4 basis-2/3">
                    <h6>يمكنك إلغاء الاشتراك في أي لحظة</h6>
                    <div class="flex gap-2 items-center">
                        <div class="flex-1">
                        ${Input({ placeholder: "ادخل البريد الالكترونى" })}
                         </div>
                        ${Button()}
                    </div>
                </div>

            </div>

        </section>


          <section class="footer-map relative py-6 overflow-hidden px-[1.375em]">
            <!-- Map background -->
            <div class="absolute inset-0 z-0">
              <iframe
                src="https://www.google.com/maps?q=Mecca&output=embed"
                class="w-full h-full pointer-events-none"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/40"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col justify-between items-center gap-5 md:gap-[8.313em]">
              <div class="flex flex-col items-center gap-4">
                <h5 class="text-center text-white">تابعنا على</h5>
                <div class="flex items-center gap-2">
                  ${socialIcons
                    .map(
                      ({ name, icon, href }) => `
                        <a
                          href="${href}"
                          class="h-10 w-10 flex items-center justify-center"
                          aria-label="${name}"
                        >
                          ${icon}
                        </a>
                      `
                    )
                    .join("")}
                </div>
              </div>

              <div class="flex flex-col md:flex-row items-center max-w-[59em] w-full">
                ${contactItems
                  .map(
                    ({ label, value, href, icons }) => `
                      <div class="flex items-center w-full justify-center">
                        <a
                          href="${href}"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="flex items-start gap-1"
                        >
                      <div class="flex items-center gap-2 pt-2">
                      ${icons
                        .map(
                          (icon, index) => `
                            <span class="${
                              index === 1
                                ? "inline-block h-[0.45em] w-2 text-white"
                                : "inline-block"
                            }">
                              ${icon}
                            </span>
                          `
                        )
                        .join("")}
                    </div>

                          <div class="flex flex-col text-white">
                            <span>${label}</span>
                            <span>${value}</span>
                          </div>
                        </a>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </section>



            <!-- main footer -->  
            <section class="container mx-auto my-12 px-[1.375em]">

                <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[24.0625em_repeat(4,1fr)] gap-6">
                    <!-- about -->  
                    <div class="flex flex-col gap-4">
                        <h5>عن متجرنا</h5>
                        <p class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">
                        متجر SoapCover هو المكان الأمثل للحصول على منتجات طبيعية وآمنة 100% لإزالة الشيب.
                        <span class="block">
                            تسوق الآن واستمتع بالعروض المميزة، المنتجات العضوية، والجودة العالية.
                        </span>
                        </p>
                    </div>

                    <!-- accountLinks -->  
                    <div class="flex flex-col gap-4">
                        <h5>حسابى</h5>
                        <div class="flex flex-col gap-2">
                        ${accountLinks
                          .map(
                            ({ label, href }) => `
                                <div class="flex items-center">
                                    <a
                                    href="${href}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-start gap-1"
                                    >

                                    <!-- Arrow icon always at the end -->
                                    <span class="inline-block h-[0.45em] w-2 mt-3">
                                        ${ArrowLeftSvg}
                                    </span>
                
                                    <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">
                                        ${label}
                                    </span>
                                    
                                    </a>
                                </div>
                                `
                          )
                          .join("")}
                        </div>
                    </div>
                    
                    <!-- importantLinks -->  
                    <div class="flex flex-col gap-4">
                        <h5>روابط مهمة</h5>
                        <div class="flex flex-col gap-2">
                        ${importantLinks
                          .map(
                            ({ label, href }) => `
                                <div class="flex items-center">
                                    <a
                                    href="${href}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-start gap-1"
                                    >

                                    <!-- Arrow icon always at the end -->
                                    <span class="inline-block h-[0.45em] w-2 mt-3">
                                        ${ArrowLeftSvg}
                                    </span>
                
                                    <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">
                                        ${label}
                                    </span>
                                    
                                    </a>
                                </div>
                                `
                          )
                          .join("")}
                        </div>
                    </div>

                    <!-- contactItemsWithNoIcons -->  
                    <div class="flex flex-col gap-4">
                        <h5>تواصل معنا</h5>
                        <div class="flex flex-col gap-2">
                            ${contactItemsWithNoIcons
                              .map(
                                ({ label, value, href }) => `
                                <div class="flex items-center">
                                    <a
                                    href="${href}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-start gap-1"
                                    >

                                    <!-- Arrow icon always at the end -->
                                    <span class="inline-block h-[0.45em] w-2 mt-3">
                                        ${ArrowLeftSvg}
                                    </span>

                                    <div class="flex flex-col">
                                        <span class="text-base tracking-normal font-normal leading-[1.5625] text-light-gray">
                                        ${label}
                                        </span>
                                        <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray " dir="ltr">
                                        ${value}
                                        </span>
                                    </div>
                                    </a>
                                </div>
                                `
                              )
                              .join("")}
                        </div>
                    </div>


                    <!-- social -->  
                    <div class="flex flex-col gap-4">
                        <h5>تابعنا على</h5>
                        <div class="flex items-center gap-2">
                            <span class="inline-block h-8.5 w-8.5 rounded-full border border-lightest-gray p-[0.531em]">
                                ${ArrowLeftSvg}
                            </span>
                            <span class="inline-block h-8.5 w-8.5 rounded-full border border-lightest-gray p-[0.531em]">
                                ${ArrowLeftSvg}
                            </span>
                            <span class="inline-block h-8.5 w-8.5 rounded-full border border-lightest-gray p-[0.531em]">
                                ${ArrowLeftSvg}
                            </span>
                            <span class="inline-block h-8.5 w-8.5 rounded-full border border-lightest-gray p-[0.531em]">
                                ${ArrowLeftSvg}
                            </span>
                        </div>
                    </div>
                </div>
                
            </section>

            <!-- footer bottom -->  
           <section class="bg-black py-4">
  <div class="container mx-auto flex flex-col items-center justify-center gap-2 md:flex-row-reverse md:justify-between md:items-center">
  <!-- Icons -->
    <div class="text-white flex items-center gap-2 mb-2 md:mb-0">
      <span class="inline-block bg-red-500 h-7.75 w-15"></span>
      <span class="inline-block bg-red-500 h-7.75 w-15"></span>
      <span class="inline-block bg-red-500 h-7.75 w-15"></span>
      <span class="inline-block bg-red-500 h-7.75 w-15"></span>
    </div>

    <!-- footer text -->
    <span dir="rtl" class="font-din-arabic text-sm leading-none tracking-normal font-normal text-white text-center md:text-right">
      © ${new Date().getFullYear()} SoapCover | جميع الحقوق محفوظة
    </span>
  </div>
</section>
    </footer>
  `;
}
