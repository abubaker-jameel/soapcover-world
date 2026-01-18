import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: `
    font-din-arabic
    inline-flex items-center justify-center
    gap-2
    rounded
    transition
    focus:outline-none
    focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    leading-[1.5em]
    tracking-normal
  `,
  variants: {
    variant: {
      primary: "bg-yellow text-white hover:bg-gray-700 focus:ring-dark-gray",
      secondary:
        "bg-lighter-gray text-dark-gray hover:bg-lightest-gray focus:ring-light-gray",
      outline:
        "border border-[#0B0A0A] text-[#0B0A0A] hover:bg-lightest-gray focus:ring-dark-gray",
      ghost: "text-dark-gray hover:bg-lighter-gray focus:ring-light-gray",
    },
    size: {
      sm: "text-xs-1 px-3 py-2",
      md: "text-sm px-4 py-2.5",
      lg: "font-din-arabic-medium text-base px-[3.531em] py-4",
      icon: "font-din-arabic-medium text-base px-4 py-4",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

export function Button({
  label = "اكتشف المزيد",
  type = "button",
  leftIcon = "",
  rightIcon = "",
  disabled = false,
  variant,
  size,
  fullWidth = false,
  className = "",
  leftIconClassName = "", // new
  rightIconClassName = "",
} = {}) {
  return `
    <button
      type="${type}"
      ${disabled ? "disabled" : ""}
      class="${buttonStyles({
        variant,
        size,
        fullWidth,
        className,
      })}"
    >

      ${
        leftIcon
          ? `
            <span class="h-6 w-6 flex items-center justify-center ${leftIconClassName}">
              ${leftIcon}
            </span>
          `
          : ""
      }

      <span>${label}</span>

      ${
        rightIcon
          ? `
            <span class="h-6 w-6 flex items-center justify-center ${rightIconClassName}">
              ${rightIcon}
            </span>
          `
          : ""
      }

    </button>
  `;
}
