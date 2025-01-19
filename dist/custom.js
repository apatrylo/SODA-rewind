// Swiper #1 Initialization
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.querySelector(".autoplay-progress circle");
  const progressContent = document.querySelector(".autoplay-progress span");

  const swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination", // Pagination specific to Swiper 1
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      autoplayTimeLeft(swiper, time, progress) {
        const circumference = 125.6; // Circle's circumference for progress
        progressCircle.style.strokeDashoffset = circumference * (1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });
});

// Swiper #2 Initialization
document.addEventListener("DOMContentLoaded", () => {
  const swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1.25,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-2", 
      prevEl: ".swiper-button-prev-2", 
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
    slideToClickedSlide: false, // Ensures autoplay remains smooth
    speed: 500, // Adjusts transition speed (milliseconds)
  });
});