/**
 * NUVIA PROPERTIES - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initStickyHeader();
  initSmoothScroll();
  initAccordions();
  initTabs();
  initScrollAnimations();
});

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Lock body scroll when menu is open
    document.body.classList.toggle('nav-open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      // Unlock body scroll when menu closes
      document.body.classList.remove('nav-open');
    });
  });
}


function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = 80;
        window.scrollTo({
          top: target.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initAccordions() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      const parent = item.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      }
      if (!isActive) item.classList.add('active');
    });
  });
}

function initTabs() {
  document.querySelectorAll('.tab-list').forEach(tabList => {
    const tabs = tabList.querySelectorAll('.tab-button');
    const panels = tabList.parentElement?.querySelectorAll('.tab-panel');
    if (!panels) return;

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        if (panels[index]) panels[index].classList.add('active');
      });
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .stagger-animation');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// Lazy Loading for Images
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImages.length) return;

  lazyImages.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });
}

// Sticky CTA Bar (appears after scrolling)
function initStickyCTA() {
  const stickyCTA = document.querySelector('.sticky-cta');
  if (!stickyCTA) return;

  let lastScrollY = 0;
  const showAfter = 500; // Show after scrolling 500px

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > showAfter) {
      stickyCTA.classList.add('visible');
    } else {
      stickyCTA.classList.remove('visible');
    }

    lastScrollY = currentScrollY;
  });
}

// Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  });
}

// Initialize lazy loading on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  initLazyLoading();
  initStickyCTA();
  initScrollProgress();
});
