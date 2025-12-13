/**
 * NUVIA PROPERTIES - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
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
  });
  
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
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
    anchor.addEventListener('click', function(e) {
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
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
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
