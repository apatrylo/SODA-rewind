document.addEventListener("DOMContentLoaded", () => {
    const progressCircle = document.querySelector(".autoplay-progress svg circle");
    const progressContent = document.querySelector(".autoplay-progress span");
  
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      on: {
        autoplayTimeLeft(swiper, time, progress) {
          const circumference = 125.6; // Circle's circumference
          progressCircle.style.strokeDashoffset = circumference * (1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
      },
    });
  });
  