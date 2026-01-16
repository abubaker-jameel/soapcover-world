export function Input({
  type = "text",
  placeholder = "",
  value = "",
  icon = "",
  className = "",
} = {}) {
  return `
    <div class="relative flex items-center">
      ${
        icon
          ? `<div class="absolute left-4 h-4 w-4 flex items-center justify-center pointer-events-none">${icon}</div>`
          : ""
      }
      <input
        type="${type}"
        placeholder="${placeholder}"
        value="${value}"
        dir="rtl"
        class="w-full font-din-arabic text-right placeholder:text-light-gray text-light-gray text-[0.813rem] border border-[#EEEEEE] rounded px-4 py-3.5 ${
          icon ? "pr-10" : ""
        } ${className}"
      />
    </div>
  `;
}
