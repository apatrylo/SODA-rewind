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

document.addEventListener("DOMContentLoaded", () => {
  const swiperConfigs = [
    {
      selector: ".mySwiper2",
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
      delay: 10000,
    },
    {
      selector: ".mySwiper3",
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3",
      delay: 8000,
    },
    {
      selector: ".mySwiper4",
      nextEl: ".swiper-button-next-4",
      prevEl: ".swiper-button-prev-4",
      delay: 7000,
    },
    {
      selector: ".mySwiper5",
      nextEl: ".swiper-button-next-5",
      prevEl: ".swiper-button-prev-5",
      delay: 9000,
    },
    {
      selector: ".mySwiper6",
      nextEl: ".swiper-button-next-6",
      prevEl: ".swiper-button-prev-6",
      delay: 6000,
    },
  ];

  swiperConfigs.forEach((config) => {
    const swiper = new Swiper(config.selector, {
      direction: "horizontal",
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1.25,
      autoplay: {
        delay: config.delay,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: config.nextEl,
        prevEl: config.prevEl,
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
      slideToClickedSlide: false,
      speed: 500,
    });
  });
});



// Popup video
// Get DOM elements
const videoThumbnail = document.getElementById('videoThumbnail');
let videoContainer = null;

// Your specific YouTube embed
const videoEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/PKHRvi4bNdM?si=USb3eBsn3SvW3Xpe" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen></iframe>`;

// Create modal container
function createModalContainer() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '99999';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    
    container.innerHTML = `
        <div style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);"></div>
        <div style="position: relative; width: 90vw; max-width: 1152px; z-index: 100000;">
            <button style="position: absolute; right: 0; top: -40px; color: white; font-size: 24px; cursor: pointer;">×</button>
            <div style="aspect-ratio: 16/9; width: 100%;">
                ${videoEmbed.replace('width="560" height="315"', 'style="width: 100%; height: 100%; border-radius: 8px;"')}
            </div>
        </div>
    `;

    const closeBtn = container.querySelector('button');
    const backdrop = container.querySelector('div');
    
    closeBtn.addEventListener('click', closeModalHandler);
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModalHandler();
    });

    return container;
}

// Open modal
function openModal() {
    if (!videoContainer) {
        videoContainer = createModalContainer();
    }
    document.body.appendChild(videoContainer);
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    if (videoContainer) {
        document.body.removeChild(videoContainer);
        videoContainer = null;
    }
    document.body.style.overflow = '';
}

// Event listeners
videoThumbnail.addEventListener('click', openModal);

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoContainer) {
        closeModalHandler();
    }
});