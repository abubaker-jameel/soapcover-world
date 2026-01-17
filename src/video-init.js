export function initVideo() {
  document.querySelectorAll(".video-container").forEach((container) => {
    const thumbnail = container.querySelector(".thumbnail");
    const overlay = container.querySelector(".play-overlay");
    const video = container.querySelector(".video-element");

    // Play video on container click
    container.addEventListener("click", () => {
      thumbnail.style.display = "none";
      overlay.style.display = "none";
      video.classList.remove("hidden");
      video.play();
    });

    // Show thumbnail & overlay when video is paused
    video.addEventListener("pause", () => {
      thumbnail.style.display = "block";
      overlay.style.display = "flex"; // overlay uses flex
      video.classList.add("hidden");
    });
  });
}
