import videoThumbnail from "../assets/video-thumbnail.png";
import videoFile from "../assets/sample-video.mp4";
import PlaySvg from "../assets/play.svg?raw";

export function Video() {
  return `
    <section class="container mx-auto py-7">
      <div class="relative w-full cursor-pointer group rounded-3xl overflow-hidden video-container h-[31.25em]">
        <!-- Thumbnail -->
        <img 
          src="${videoThumbnail}" 
          alt="Video Thumbnail" 
          class="w-full h-full object-cover thumbnail"
        >

        <!-- Play button overlay -->
        <div class="absolute inset-0 flex items-center justify-center play-overlay">
        <div class="w-[4.375em] h-[4.375em] md:w-20 md:h-20 bg-yellow rounded-full flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110
                    outline-[0.063em] outline-white outline-offset-[0.938em]">
            <span class="inline-block w-5 h-6">
                ${PlaySvg}
             </span>
        </div>
        </div>


        <!-- Hidden video -->
        <video class="absolute inset-0 w-full h-full object-cover hidden video-element" src="${videoFile}" controls></video>
      </div>
    </section>
  `;
}
