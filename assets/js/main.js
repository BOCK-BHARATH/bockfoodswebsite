/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 5,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 30,
    },
    1024: {
      spaceBetween: 40,
    }
  }
});
  
let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// Link both sliders
swiperThumbs.controller.control = swiperCards;
swiperCards.controller.control = swiperThumbs;

/*=============== MOBILE MENU FUNCTIONALITY ===============*/
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

// Open mobile menu
mobileMenuToggle?.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    document.body.classList.add('overflow-hidden');
});

// Close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
}

mobileMenuClose?.addEventListener('click', closeMobileMenu);

// Close menu when clicking on backdrop
mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu || e.target.classList.contains('bg-black/80')) {
        closeMobileMenu();
    }
});

// Close menu when clicking on navigation links
const mobileNavLinks = mobileMenu?.querySelectorAll('a[href^="#"]');
mobileNavLinks?.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
        closeMobileMenu();
    }
});

/*=============== SMOOTH SCROLLING FOR NAVIGATION LINKS ===============*/
const allNavLinks = document.querySelectorAll('a[href^="#"]');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/*=============== RESPONSIVE TIMELINE FOR MOBILE ===============*/
function makeTimelineResponsive() {
    const timeline = document.querySelector('#work .relative');
    const phases = timeline?.querySelectorAll('.relative.flex.items-center');
    
    if (window.innerWidth <= 768) {
        // Mobile layout adjustments
        phases?.forEach(phase => {
            const contentBox = phase.querySelector('.w-full.flex');
            if (contentBox) {
                contentBox.className = 'w-full flex justify-center';
                const innerDiv = contentBox.querySelector('.w-full.max-w-md');
                if (innerDiv) {
                    innerDiv.className = 'w-full max-w-md mx-auto px-4';
                }
            }
        });
    }
}

// Run on load and resize
window.addEventListener('load', makeTimelineResponsive);
window.addEventListener('resize', makeTimelineResponsive);






