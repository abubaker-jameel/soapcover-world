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
  {
    id: "nav-item-1",
    name: "تواصل معنا",
  },
  {
    id: "nav-item-2",
    name: "سياسة الإستبدال أو الاسترجاع",
  },
  {
    id: "nav-item-3",
    name: "المفضلة",
  },
  { id: "nav-item-4", name: "العربية - رس" },
];

export function Header() {
  const mainNavItems = mainNavData
    .map(
      (item) => `
        <li class="flex items-center gap-2">
          <div class="flex flex-col gap-[0.25em]">
            <span class="text-sm font-normal -tracking-normal leading-none text-light-gray">
              ${item.firstText}
            </span>
            <span class="text-sm font-normal -tracking-normal leading-none">
              ${item.lastText}
            </span>
          </div>
          <div class="h-10 w-10 p-2 rounded-full bg-lighter-gray flex items-center justify-center">
            ${item.icon}
          </div>
        </li>
      `
    )
    .join("");

  const navItems = navData
    .map((item, index) => {
      const li = `
      <li id="${item.id}" class="font-normal text-xs-1 leading-none -tracking-normal text-dark-gray">
        <a href="#" class="hover:underline">
          ${item.name}
        </a>
      </li>
    `;
      const separator =
        index !== navData.length - 1
          ? `<span class="mx-4 h-2 w-[0.063em] bg-[#D6D6D6] inline-block"></span>`
          : "";
      return li + separator;
    })
    .join("");

  return `
    <header class="font-din-arabic">

        <!-- top header -->

    <div class="bg-lighter-gray">   
     <div class="container mx-auto flex items-center justify-between py-2">
        <div class="">
            <nav>
                <ul class="flex items-center">
                   ${navItems}
                </ul>
            </nav>
        </div>


    <div>
    <ul class="flex items-center">
        <!-- Email -->
        <li class="flex items-center gap-2 font-normal text-xs-1 leading-none -tracking-normal text-dark-gray">
        <span>info@sapcover.com</span>
        <span class="inline-block h-4 w-4">${MailSvg}</span>
        </li>

        <!-- Separator -->
        <span class="mx-4 h-2 w-[0.063em] bg-[#D6D6D6] inline-block"></span>

        <!-- Phone -->
        <li class="flex items-center gap-2 font-normal text-xs-1 leading-none -tracking-normal text-dark-gray">
        <span>+971 50 796 7166</span>
        <span class="inline-block h-4 w-4">${CallSvg}</span>
        </li>
    </ul>
    </div>

    </div>
    </div>

        <!-- bottom header -->

    <div class="flex items-center justify-between gap-12 py-8 container mx-auto">
        <div>
            <ul class="flex items-center gap-8">
                    ${mainNavItems}
            </ul>
        </div>


        <div class="flex-1">
            ${Input({
              placeholder: "ابحث عما تريد",
              icon: SearchSvg,
            })}
        </div>


        <div>
                ${Logo}
        </div>
     </div>
    </header>
  `;
}
