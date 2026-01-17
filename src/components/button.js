import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: `
    font-din-arabic
    inline-flex items-center justify-center
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
        "border border-dark-gray text-dark-gray hover:bg-lightest-gray focus:ring-dark-gray",
      ghost: "text-dark-gray hover:bg-lighter-gray focus:ring-light-gray",
    },
    size: {
      sm: "text-xs-1 px-3 py-2",
      md: "text-sm px-4 py-2.5",
      lg: "font-din-arabic-medium text-base px-8 py-4 ",
    },
    fullWidth: {
      true: "w-full",
    },
    iconPosition: {
      right: "gap-2 flex-row", // RTL default
      left: "gap-2 flex-row-reverse", // icon on left
      none: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
    iconPosition: "none",
  },
});

export function Button({
  label = "اكتشف المزيد",
  type = "button",
  icon = "",
  iconPosition = "none", // right | left | none
  disabled = false,
  variant,
  size,
  fullWidth = false,
  className = "",
} = {}) {
  return `
    <button
      type="${type}"
      ${disabled ? "disabled" : ""}
      class="${buttonStyles({
        variant,
        size,
        fullWidth,
        iconPosition: icon ? iconPosition : "none",
        className,
      })}"
    >
      ${icon ? `<span class="h-4 w-4 flex items-center">${icon}</span>` : ""}
      <span>${label}</span>
    </button>
  `;
}
