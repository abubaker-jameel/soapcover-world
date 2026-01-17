import productImage from "../assets/large-banner-inner-desktop.png";

export function ProductImage() {
  return `
    <section>
      <div class="relative w-full pt-[100%]">
          <img 
            src="${productImage}" 
            alt="Product Banner" 
            class="absolute left-0 top-0 w-full h-full object-cover"
          >
      </div>
    </section>
  `;
}
