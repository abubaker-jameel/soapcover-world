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
        <section class="footer-newsletter container mx-auto py-6">
            <!-- subscription form -->

            <div class="flex gap-6">

                <div class="flex items-center gap-4 basis-1/3">
                    <div class="h-16 w-16">
                        ${MessageSvg}
                    </div>
                    <div class="flex flex-col gap-1">
                        <h4>الاشتراك فى النشرة البريدية</h4>
                        <p class="text-sm leading-none tracking-normal font-normal">انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</p>
                    </div>
                </div>
                
                <div class="flex flex-col gap-4 basis-2/3">
                    <h6>يمكنك إلغاء الاشتراك في أي لحظة</h6>
                    <div class="flex gap-2">
                        ${Input({ placeholder: "ادخل البريد الالكترونى", className: "flex-1" })}
                        ${Button()}
                    </div>
                </div>

            </div>

        </section>


         <section class="footer-map bg-amber-900 py-6">
            <!-- google map / iframe -->
            <div class="flex flex-col justify-between items-center gap-[8.313em]">
                <div class="flex flex-col items-center gap-4">
                    <h5 class="text-center text-white">تابعنا على</h5>
                    <div class="flex items-center justify-between gap-2">
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

                <div class="flex items-center max-w-[59em] w-full">
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
                                    (icon) => `
                                    <span class="inline-block">
                                        ${icon}
                                    </span>
                                    `
                                  )
                                  .join("")}
                            </div>

                            <div class="flex flex-col text-white">
                                <span class="text-base tracking-normal font-normal leading-[1.5625]">
                                ${label}
                                </span>
                                <span class="text-base tracking-normal font-normal leading-[1.5625]">
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
            </section>


            <!-- main footer -->  
            <section class="container mx-auto my-12">

                <div class="grid grid-cols-[24.0625em_repeat(4,1fr)] gap-6">
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
                                    <span class="inline-block">
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
                                    <span class="inline-block">
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
                                    <span class="inline-block">
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
                        <div class="flex items-center justify-between gap-2">
                            <span class="inline-block">
                                ${SnapchatSvg}
                            </span>
                            <span class="inline-block">
                                ${SnapchatSvg}
                            </span>
                        </div>
                    </div>


                    



                </div>
                
            </section>

            <!-- footer bottom -->  
            <section class="bg-black py-4">
                <div class="container mx-auto flex items-center justify-between"> 
                    <span dir="ltr" class="font-din-arabic text-sm leading-none tracking-normal font-normal text-white">© ${new Date().getFullYear()} SoapCover | جميع الحقوق محفوظة</span>
                    <div class="text-white">Images</div>
                </div>
            </section>
    </footer>
  `;
}
