import CartSvg from "./assets/cart.svg?raw";
import AccountSvg from "./assets/account.svg?raw";
import SearchSvg from "./assets/search.svg?raw";
import CallSvg from "./assets/call.svg?raw";
import MailSvg from "./assets/mail.svg?raw";

import Logo from "/logo/logo.svg?raw";

import { Input } from "./components/input";

const mainNavData = [
  {
    id: "main-nav-id-1",
    firstText: "سلة المشتريات",
    lastText: "1,200 رس",
    icon: CartSvg,
  },
  {
    id: "main-nav-id-2",
    firstText: "مرحبا بك",
    lastText: "تسجيل دخول",
    icon: AccountSvg,
  },
];

const navData = [
  { id: "nav-item-4", name: "العربية - رس" },
  {
    id: "nav-item-3",
    name: "المفضلة",
  },
  {
    id: "nav-item-2",
    name: "سياسة الإستبدال أو الاسترجاع",
  },
  {
    id: "nav-item-1",
    name: "تواصل معنا",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-mobile-nav");

  if (menuBtn && mobileNav && closeBtn) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  }
});

export function Header() {
  const mainNavItems = mainNavData
    .map(
      (item) => `
        <li class="flex items-center gap-2">
          <div class="h-10 w-10 p-2 rounded-full bg-lighter-gray flex items-center justify-center">
            ${item.icon}
          </div>
          <div class="flex flex-col gap-[0.25em]">
            <span class="text-sm font-normal -tracking-normal leading-none text-light-gray">
              ${item.firstText}
            </span>
            <span class="text-sm font-normal -tracking-normal leading-none">
              ${item.lastText}
            </span>
          </div>
        </li>
      `
    )
    .join("");

  const navItems = navData
    .map((item, index) => {
      const li = `
      <li id="${item.id}" class="font-normal text-xs-1 leading-none -tracking-normal text-dark-gray hidden md:block">
        <a href="#" class="hover:underline">
          ${item.name}
        </a>
      </li>
    `;
      const separator =
        index !== navData.length - 1
          ? `<span class="mx-4 h-2 w-[0.063em] bg-[#D6D6D6] hidden md:inline-block"></span>`
          : "";
      return li + separator;
    })
    .join("");

  return `
    <header class="font-din-arabic bg-white">

        <!-- top header -->

    <div class="bg-lighter-gray">   
     <div class="container mx-auto flex items-center justify-center md:justify-between py-2">


    <div>
      <ul class="flex items-center" dir="ltr">

        <!-- Email -->
        <li class="flex items-center gap-2 font-normal text-xs-1 leading-none -tracking-normal text-dark-gray">
          <a href="mailto:info@sapcover.com" class="flex items-center gap-2">
            <span>info@sapcover.com</span>
            <span class="inline-block h-4 w-4">${MailSvg}</span>
          </a>
        </li>

        <!-- Separator -->
        <span class="mx-4 h-2 w-[0.063em] bg-[#D6D6D6] inline-block"></span>

        <!-- Phone -->
        <li class="flex items-center gap-2 font-normal text-xs-1 leading-none -tracking-normal text-dark-gray">
          <a href="tel:+971507967166" class="flex items-center gap-2">
            <span>+971 50 796 7166</span>
            <span class="inline-block h-4 w-4">${CallSvg}</span>
          </a>
        </li>

      </ul>
    </div>


      <div class="">
            <nav>
                <ul class="flex items-center">
                   ${navItems}
                </ul>
            </nav>
      </div>

    </div>
    </div>

        <!-- bottom header -->


    <div class="container mx-auto flex flex-col md:flex-row items-center px-4 gap-5 md:gap-12 py-8 md:justify-between">

  <div class="flex items-center gap-12 justify-between w-full order-1">
    <div class="flex items-center gap-2">

      <button class="block md:hidden p-2 text-[#FCBD02]" id="mobile-menu-btn" aria-label="Open menu">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
          <rect y="6" width="28" height="1" rx="1" fill="#E2B23A"/>
          <rect y="13" width="28" height="1" rx="1" fill="#E2B23A"/>
          <rect y="20" width="28" height="1" rx="1" fill="#E2B23A"/>
        </svg>
      </button>

      <!-- Logo -->
      <div class="h-12 w-[4.938em]">
        ${Logo}
      </div>

    </div>


   <ul class="flex items-center gap-8 order-2 md:order-3">
      ${mainNavItems}
    </ul>
    
    <!-- Desktop Input -->

     <div class="md:flex-1 hidden md:block md:order-2">
    ${Input({
    placeholder: "ابحث عما تريد",
    icon: SearchSvg,
  })}
  </div>


  </div>

  <!-- Mobile Input -->

  <div class="w-full flex-1 md:hidden order-3 md:order-2">
    ${Input({
    placeholder: "ابحث عما تريد",
    icon: SearchSvg,
  })}
  </div>
</div>




    <!-- Mobile Navbar-->
<nav id="mobile-nav" class="fixed inset-0 bg-white z-50 flex-col items-center justify-start pt-24 gap-6 transition-all duration-200 hidden flex md:hidden">
  <button id="close-mobile-nav" class="absolute top-4 right-4 p-2">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="4" y1="4" x2="20" y2="20" stroke="#E2B23A"/>
      <line x1="20" y1="4" x2="4" y2="20" stroke="#E2B23A"/>
    </svg>
  </button>
  <ul class="flex flex-col items-center gap-6">
    ${navData
      .map(
        (item) => `
        <li class="font-normal text-lg text-dark-gray">
          <a href="#">${item.name}</a>
        </li>
      `
      )
      .join("")}
  </ul>
</nav>
    </header>
  `;
}
