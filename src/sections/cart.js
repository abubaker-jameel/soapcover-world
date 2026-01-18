import DollarSignSmall from "../assets/dollar-sign-small.svg?raw";
import ProductImage from "../assets/product-image.png";
import RoughChevronIcon from "../assets/left-chevron-rough.svg?raw";
import PlusSvg from "../assets/plus.svg?raw";
import MinusSvg from "../assets/minus.svg?raw";
import { Button } from "../components/button";

export function Cart() {
  return `
    <section class="container mx-auto pt-4 pb-10">
      <div class="flex flex-col gap-10">

        <!-- Breadcrumb -->
        <div class="flex items-center gap-1">
          <span class="text-base tracking-normal font-normal leading-[1.5625] text-yellow">الرئيسية</span>
          <span class="text-base tracking-normal font-normal leading-[1.5625] text-yellow">/</span>
          <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">سلة المشتريات</span>
        </div>

        <div class="flex flex-col md:flex-row items-start gap-6">
          
          <!-- First Card -->
          <div class="bg-white w-full md:flex-1/4 order-2 rounded-2xl p-4 flex flex-col gap-4">
            <div class="flex flex-col gap-4">
              <h5>ملخص الطلب</h5>
              <div class="flex items-center justify-between gap-4">
                <div class="w-[5.938em] h-20 rounded-sm border border-lightest-gray">
                  <img src=${ProductImage} alt="product-image" class="p-1 object-contain h-full w-full">
                </div>
                <div class="flex-1">
                  <h5>صابونة SoapCover</h5>
                  <span class="text-sm font-normal tracking-normal text-dark-gray flex items-center">
                    69,00 <span class="flex items-center justify-center h-4 w-4">${DollarSignSmall}</span>
                  </span>
                </div>
                <span class="h-7 w-7 bg-dark-gray p-2 rounded-full flex items-center justify-center"></span>
              </div>
            </div>

            <!-- Block separator -->
            <span class="block h-px bg-lightest-gray w-full"></span>
            <!-- Block separator -->

            <div class="flex items-center justify-between">

                <div class="flex items-center justify-between w-[7.875em] px-4 py-3 rounded-sm border border-lightest-gray">

                <!-- Right separator -->
                <div class="flex items-center">
                    <!-- Plus button -->
                    <span class="flex items-center justify-center h-3 w-3 text-dark-gray">
                        ${PlusSvg}
                    </span>
                    <span class="inline-block w-px h-4 bg-lightest-gray mx-2"></span>
                </div>

                <!-- Number -->
                <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">
                    2
                </span>

                 <!-- Minus button -->
                <div class="flex items-center">
                    <!-- Left separator -->
                    <span class="inline-block w-px h-4 bg-lightest-gray mx-2"></span>
                     <span class="flex items-center justify-center h-3 w-3 text-dark-gray">
                    ${MinusSvg}
                    </span>
                </div>
                </div>

                <div class="flex items-center">
                    <span class="font-din-arabic-medium text-base font-medium leading-none tracking-normal">المجموع :</span>
                    <span class="font-din-arabic-medium text-base font-medium leading-none tracking-normal">158,000</span>
                    <span class="inline-block h-6 w-6 py-[0.109em]">${DollarSignSmall}</span>
                </div>

            </div>

            <!-- Block separator -->
            <span class="block h-px bg-lightest-gray w-full"></span>
            <!-- Block separator -->

            <div class="flex items-center justify-between">
                <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">مجموع المنتجات</span>
                <span class="text-base tracking-normal font-normal leading-[1.5625] text-dark-gray">145 رس</span>
            </div>

            <div class="flex items-center justify-between">
                <span class="font-din-arabic-medium text-base tracking-normal font-medium leading-none text-[#0B0A0A]">الإجمالى</span>
                <div>
                    <span class="font-din-arabic-medium text-base tracking-normal font-medium leading-none text-[#0B0A0A]">145 رس</span>
                    <span class="text-sm font-normal leading-none tracking-normal">الاسعار شاملة للضريبة <span class="text-[#F55157]">*</span></span>
                </div>
                
            </div>
          </div>

          <!-- Second Card -->
          <div class="bg-white rounded-2xl gap-4 w-full md:flex-1/2 p-4">
            <h5>تفاصيل الشحن</h5>

            <div class="flex flex-col gap-4">
        

            <div class="flex flex-col items-center gap-2">
              <span class="text-sm leading-none tracking-normal text-dark-gray">🚚 شحن مجاني</span>
              <span class="text-sm leading-none tracking-normal text-dark-gray">🔒 جميع البيانات محفوظة وآمنة</span>
            </div>

            <!-- Multiple inputs / dropdowns start -->
            
            <div class="flex flex-col gap-2">
              <label for="countrySelect" class="text-sm font-normal tracking-normal leading-none text-[#0B0A0A]">
                <span class="text-[#B42318] mr-1">*</span>
                الدولة / المنطقة
              </label>
              <div class="flex items-center border border-lightest-gray rounded w-full px-2 flex-row-reverse">
                <span class="inline-block h-6 w-6 p-[0.2em] -rotate-90 text-[#6F7380]">${RoughChevronIcon}</span>
                <select id="countrySelect" class="flex-1 border-none outline-none pl-2 pr-2 py-[0.8em] text-sm font-normal leading-none tracking-normal text-light-gray text-right appearance-none bg-transparent">
                  <option value="">العراق</option>
                  <option value="syria">سوريا</option>
                  <option value="lebanon">لبنان</option>
                  <option value="jordan">الأردن</option>
                </select>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex flex-col gap-2 basis-1/2">
                <label for="myInput1" class="text-sm font-normal tracking-normal leading-none text-[#0B0A0A]">
                  <span class="text-[#B42318] mr-1">*</span>
                  الدولة / المنطقة
                </label>
                <div class="flex items-center border border-lightest-gray rounded w-full px-2 flex-row-reverse">
                  <input id="myInput1" type="text" placeholder="العراق" class="flex-1 border-none outline-none pl-2 pr-2 py-[0.594em] text-sm font-normal leading-none tracking-normal text-light-gray text-right"/>
                </div>
              </div>
              <div class="flex flex-col gap-2 basis-1/2">
                <label for="myInput2" class="text-sm font-normal tracking-normal leading-none text-[#0B0A0A]">
                  <span class="text-[#B42318] mr-1">*</span>
                  الدولة / المنطقة
                </label>
                <div class="flex items-center border border-lightest-gray rounded w-full px-2 flex-row-reverse">
                  <input id="myInput2" type="text" placeholder="العراق" class="flex-1 border-none outline-none pl-2 pr-2 py-[0.594em] text-sm font-normal leading-none tracking-normal text-light-gray text-right"/>
                </div>
              </div>
            </div>

            <span class="text-sm leading-none tracking-normal text-dark-gray">
              ⚠️ لضمان إتمام التسليم بنجاح، يرجى إدخال الاسم الحقيقي.
            </span>

            <!-- Phone input -->
            <div class="flex flex-col gap-2 basis-1/2">
              <label for="phoneInput" class="text-sm font-normal tracking-normal leading-none text-[#0B0A0A]">
                <span class="text-[#B42318] mr-1">*</span>
                رقم الهاتف
              </label>
              <div class="flex items-center border border-lightest-gray rounded w-full px-2 flex-row-reverse">
                <div class="flex items-center gap-2 pr-2">
                  <span class="text-sm text-light-gray">+963</span>
                  <div class="w-px h-5 bg-[#D6D6D6]"></div>
                  <svg class="w-8 h-5.75 shrink-0" viewBox="0 0 32 23" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="23" fill="#B42318"/>
                  </svg>
                </div>
                <input id="phoneInput" type="tel" placeholder="9X XXXXXXX" class="flex-1 border-none outline-none pl-2 py-[0.594em] text-sm font-normal leading-none tracking-normal text-[#0B0A0A] placeholder:text-[#0B0A0A] text-left"/>
              </div>
            </div>

            ${Button({ label: "إتمام الطلب" })}

            <div class="flex items-center justify-center border py-3 rounded-sm border-[#02076F]">
                <div class="flex items-center gap-2">
                    <span class="h-6 w-6 flex items-center justify-center py-[0.078em] text-[#02076F]">${RoughChevronIcon}</span>
                    <span class="text-sm leading-none tracking-normal text-[#02076F]">حدد منطقة الاستلام على الخريطة</span>
                </div>
            </div>

        </div>

            <!-- You can keep the rest repeated dropdowns / inputs as-is -->
            <!-- Make sure all divs are closed properly at the end -->
            
          </div> <!-- End of Second Card -->

        </div> <!-- End of flex items-start gap-6 -->

      </div> <!-- End of flex flex-col gap-10 -->
    </section>
  `;
}
