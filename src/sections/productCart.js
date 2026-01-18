import DollarSignSmall from "../assets/dollar-sign-small.svg?raw";
import DollarSignPink from "../assets/dollar-sign-pink.svg?raw";
import Ratings4Stars from "../assets/ratings-4.svg?raw";
import ProductImage from "../assets/product-image.png";
import ShoppingCart from "../assets/shopping-cart-02.svg?raw";
import { Button } from "../components/button";

export function ProductCart() {
  return `
        <section class="container mx-auto pt-14 pb-4 px-[1.375em]">
            <div class="bg-white border-2 border-yellow rounded-3xl p-4">

            <div class="flex flex-col gap-4 md:flex-row">

            <div class="relative w-full pt-[22.75em] md:basis-1/2">
            <img src=${ProductImage} alt="product-image" class="absolute top-0 left-0 object-cover h-full w-full">

            <!-- Discount tag at top-left -->
            <div class="absolute top-4 left-4 flex items-center">
                <div class="relative flex items-center bg-[#FF5A5F] px-2 py-2 rounded-sm">
                
                <!-- RTL text inside tag -->
                <span class="text-white text-sm leading-none tracking-normal font-normal flex flex-row-reverse gap-1" dir="rtl">
                        <span>25%</span>  
                        <span>خصم</span>
                </span>

                <!-- Right rectangle / diamond -->
                <div class="absolute -right-1 rotate-90 top-1/2 -translate-y-1/2">
                    <div class="w-3 h-2.25 rotate-45 bg-[#FF5A5F]"></div>
                </div>
                
                </div>
            </div>
            </div>


            
                
            <div class="w-full md:basis-1/2 flex flex-col justify-between">
              <div class="flex flex-col gap-1">
                    <div class="flex flex-col gap-1">
                        <span class="text-sm leading-none tracking-normal font-normal text-yellow">باقات إزالة الشيب الأكثر مبيعًا (تكفي لمدة 3 أشهر)</span>
                        <h5>صابونة SoapCover</h5>
                        <ul>
                            <li class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">🧴 حل طبيعي لإزالة الشيب بدون صبغات كيميائية</li>
                            <li class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">🌿 مكونات عضوية وآمنة للاستخدام اليومي</li>
                            <li class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray"> ✨ يعيد للشعر مظهره الطبيعي ولمعانه الصحي</li>
                        </ul>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex gap-3">
                            <span class="font-din-arabic-bold text-2xl font-bold tracking-normal leading-[1.47] text-pink flex items-center">69.00<span class="flex items-center justify-center h-6 w-6">${DollarSignPink}</span></span>
                            <span class="font-din-arabic-medium text-lg tracking-normal font-medium line-through text-light-gray flex items-center">172.00 <span class="flex items-center justify-center h-4 w-4">${DollarSignSmall}</span></span>
                        </div>
                         <div class="flex flex-col gap-2">
                            <span class="inline-block h-[0.813em]">${Ratings4Stars}</span>
                            <span class="text-sm leading-none tracking-normal font-normal text-dark-gray">(10) تقييمات</span>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <span>سارع بالشراء! ينتهي العرض خلال:</span>
                        <div class="grid grid-cols-4 gap-2">
                            <span class="inline-block bg-lighter-gray pt-1 pb-2 rounded-sm">
                                <h5 class="flex flex-col items-center justify-center">
                                    02
                                    <span class="font-din-arabic text-sm font-normal leading-none tracking-normal text-light-gray">يوم</span>
                                </h5>                        
                            </span>
                            <span class="inline-block bg-lighter-gray rounded-sm">
                                <h5 class="flex flex-col items-center justify-center">
                                    16
                                    <span class="font-din-arabic text-sm font-normal leading-none tracking-normal text-light-gray">ساعة</span>
                                </h5>                        
                            </span>
                            <span class="inline-block bg-lighter-gray rounded-sm">
                                <h5 class="flex flex-col items-center justify-center">
                                    55
                                    <span class="font-din-arabic text-sm font-normal leading-none tracking-normal text-light-gray">دقيقة</span>
                                </h5>                        
                            </span>
                            <span class="inline-block bg-lighter-gray rounded-sm">
                                <h5 class="flex flex-col items-center justify-center">
                                    55
                                    <span class="font-din-arabic text-sm font-normal leading-none tracking-normal text-light-gray">ثانية</span>
                                </h5>                        
                            </span>
                        </div>
                    </div>
                    ${Button({ leftIcon: ShoppingCart, leftIconClassName: "h-6 w-6" })}
                </div>
            </div>


            </div>

            </div>
        </section>
    `;
}
