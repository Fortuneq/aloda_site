/**
 * ALODA Design System - Animation Scripts
 * =========================================
 * Реализация ключевых анимаций и интерактивных эффектов
 */

/* ==========================================
   1. HERO AI BRAIN ANIMATION (Canvas)
   ========================================== */

class AIBrainAnimation {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.time = 0;
    this.nodes = [];
    this.connections = [];
    this.nodeCount = options.nodeCount || 50;
    this.maxConnections = options.maxConnections || 150;
    this.connectionDistance = options.connectionDistance || 150;

    // Gradient colors (red to purple)
    this.colors = {
      primary: '#E63946',
      secondary: '#9D4EDD',
      accent: '#5B40A6'
    };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.createNodes();
    this.animate();
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);

    this.width = rect.width;
    this.height = rect.height;

    // Recreate nodes on resize
    if (this.nodes.length > 0) {
      this.createNodes();
    }
  }

  createNodes() {
    this.nodes = [];

    // Create nodes in a brain-like shape (two hemispheres)
    for (let i = 0; i < this.nodeCount; i++) {
      const angle = (i / this.nodeCount) * Math.PI * 2;
      const radius = Math.random() * (this.width * 0.25);

      // Create two clusters for brain hemispheres
      const hemisphere = Math.random() > 0.5 ? 1 : -1;
      const offsetX = hemisphere * (this.width * 0.15);

      this.nodes.push({
        x: this.width / 2 + Math.cos(angle) * radius + offsetX,
        y: this.height / 2 + Math.sin(angle) * radius * 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
        originalX: this.width / 2 + Math.cos(angle) * radius + offsetX,
        originalY: this.height / 2 + Math.sin(angle) * radius * 0.8,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  updateNodes() {
    this.nodes.forEach(node => {
      // Gentle floating movement
      node.x += node.vx;
      node.y += node.vy;

      // Return to original position
      const dx = node.originalX - node.x;
      const dy = node.originalY - node.y;
      node.vx += dx * 0.001;
      node.vy += dy * 0.001;

      // Damping
      node.vx *= 0.95;
      node.vy *= 0.95;

      // Update pulse
      node.pulse += 0.05;
    });
  }

  drawConnections() {
    this.connections = [];

    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const nodeA = this.nodes[i];
        const nodeB = this.nodes[j];

        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance && this.connections.length < this.maxConnections) {
          const opacity = 1 - (distance / this.connectionDistance);

          // Gradient line
          const gradient = this.ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          gradient.addColorStop(0, `${this.colors.primary}${Math.floor(opacity * 100).toString(16)}`);
          gradient.addColorStop(1, `${this.colors.secondary}${Math.floor(opacity * 100).toString(16)}`);

          this.ctx.strokeStyle = gradient;
          this.ctx.lineWidth = opacity * 2;
          this.ctx.beginPath();
          this.ctx.moveTo(nodeA.x, nodeA.y);
          this.ctx.lineTo(nodeB.x, nodeB.y);
          this.ctx.stroke();

          this.connections.push({ nodeA, nodeB, distance });
        }
      }
    }
  }

  drawNodes() {
    this.nodes.forEach(node => {
      // Pulsing effect
      const pulseScale = 1 + Math.sin(node.pulse) * 0.3;
      const radius = node.radius * pulseScale;

      // Gradient for nodes
      const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius);
      gradient.addColorStop(0, this.colors.primary);
      gradient.addColorStop(1, this.colors.secondary);

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Glow effect
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = this.colors.primary;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });
  }

  draw() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw connections first (behind nodes)
    this.drawConnections();

    // Draw nodes
    this.drawNodes();

    // Central pulse effect
    const pulseRadius = 30 + Math.sin(this.time * 0.02) * 10;
    const gradient = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, 0,
      this.width / 2, this.height / 2, pulseRadius
    );
    gradient.addColorStop(0, `${this.colors.primary}66`);
    gradient.addColorStop(1, `${this.colors.secondary}00`);

    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(this.width / 2, this.height / 2, pulseRadius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  animate() {
    this.updateNodes();
    this.draw();
    this.time += 1;

    requestAnimationFrame(() => this.animate());
  }
}

// Инициализация (только на desktop)
if (window.innerWidth >= 768) {
  document.addEventListener('DOMContentLoaded', () => {
    new AIBrainAnimation('hero-wave', {
      nodeCount: 60,
      maxConnections: 200,
      connectionDistance: 120
    });
  });
}

/* ==========================================
   2. FLOATING ICONS ANIMATION
   ========================================== */

function initFloatingIcons() {
  const icons = document.querySelectorAll('.floating-icon');

  icons.forEach((icon, index) => {
    // Stagger animation delays
    icon.style.animationDelay = `${index * 1.2}s`;

    // Add parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
      const speed = icon.dataset.speed || 0.05;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      icon.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// Инициализация (только на desktop)
if (window.innerWidth >= 768) {
  document.addEventListener('DOMContentLoaded', initFloatingIcons);
}

/* ==========================================
   3. SCROLL ANIMATIONS (Intersection Observer)
   ========================================== */

class ScrollAnimations {
  constructor(options = {}) {
    this.threshold = options.threshold || 0.15;
    this.rootMargin = options.rootMargin || '0px 0px -100px 0px';

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      }
    );

    this.init();
  }

  init() {
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in, .fade-in-group').forEach(el => {
      this.observer.observe(el);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Stagger children animations
        if (entry.target.classList.contains('fade-in-group')) {
          this.staggerChildren(entry.target);
        }
      }
    });
  }

  staggerChildren(parent) {
    const children = parent.children;
    Array.from(children).forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('is-visible');
      }, index * 100); // 100ms delay between each
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});

/* ==========================================
   4. CAROUSEL (Testimonials)
   ========================================== */

class Carousel {
  constructor(element, options = {}) {
    this.carousel = element;
    this.track = this.carousel.querySelector('.carousel__track');
    this.slides = Array.from(this.track.children);
    this.prevButton = this.carousel.querySelector('[data-direction="prev"]');
    this.nextButton = this.carousel.querySelector('[data-direction="next"]');
    this.dotsNav = this.carousel.querySelector('.carousel-dots');
    this.dots = Array.from(this.dotsNav?.children || []);

    this.currentIndex = 0;
    this.autoplayInterval = options.autoplay || 5000;
    this.autoplayTimer = null;

    this.init();
  }

  init() {
    // Set initial position
    this.goToSlide(0);

    // Event listeners
    this.prevButton?.addEventListener('click', () => this.prevSlide());
    this.nextButton?.addEventListener('click', () => this.nextSlide());

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Touch/swipe support
    this.addSwipeSupport();

    // Autoplay
    if (this.autoplayInterval) {
      this.startAutoplay();
      this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
      this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
    }

    // Keyboard navigation
    this.carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }

  goToSlide(index) {
    // Wrap around
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;

    this.currentIndex = index;

    // Calculate offset (for horizontal carousel)
    const slideWidth = this.slides[0].getBoundingClientRect().width;
    const offset = -slideWidth * index;

    this.track.style.transform = `translateX(${offset}px)`;

    // Update dots
    this.updateDots();

    // Update ARIA
    this.slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== index);
    });

    // Announce to screen readers
    this.carousel.setAttribute('aria-live', 'polite');
    this.carousel.setAttribute('aria-atomic', 'true');
  }

  prevSlide() {
    this.goToSlide(this.currentIndex - 1);
  }

  nextSlide() {
    this.goToSlide(this.currentIndex + 1);
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.classList.add('carousel-dots__dot--active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('carousel-dots__dot--active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  addSwipeSupport() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    });

    this.track.addEventListener('touchend', () => {
      if (!isDragging) return;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) { // Threshold 50px
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }

      isDragging = false;
    });
  }

  startAutoplay() {
    this.stopAutoplay(); // Clear existing
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }
}

// Инициализация всех каруселей на странице
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(carousel => {
    new Carousel(carousel, { autoplay: 5000 });
  });
});

/* ==========================================
   5. TABS SWITCHER (Pricing)
   ========================================== */

class TabSwitcher {
  constructor(element) {
    this.tabs = element;
    this.buttons = Array.from(this.tabs.querySelectorAll('[role="tab"]'));
    this.panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

    this.init();
  }

  init() {
    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.switchTab(index));

      // Keyboard navigation
      button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const nextIndex = (index + 1) % this.buttons.length;
          this.switchTab(nextIndex);
          this.buttons[nextIndex].focus();
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prevIndex = (index - 1 + this.buttons.length) % this.buttons.length;
          this.switchTab(prevIndex);
          this.buttons[prevIndex].focus();
        }
      });
    });
  }

  switchTab(index) {
    // Update buttons
    this.buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('tabs__button--active');
        button.setAttribute('aria-selected', 'true');
        button.setAttribute('tabindex', '0');
      } else {
        button.classList.remove('tabs__button--active');
        button.setAttribute('aria-selected', 'false');
        button.setAttribute('tabindex', '-1');
      }
    });

    // Update panels with smooth transition
    this.panels.forEach((panel, i) => {
      if (i === index) {
        panel.removeAttribute('hidden');
        panel.style.display = 'block';
        // Force reflow before adding visible class
        setTimeout(() => {
          panel.classList.add('fade-in', 'is-visible');
        }, 10);
      } else {
        panel.classList.remove('is-visible');
        // Wait for fade-out before hiding
        setTimeout(() => {
          panel.style.display = 'none';
          panel.setAttribute('hidden', '');
        }, 300);
      }
    });

    // Track analytics
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        event: 'pricing_tab_change',
        tab_index: index,
        tab_name: this.buttons[index].textContent.trim()
      });
    }
  }
}

// Инициализация всех tab-переключателей
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs[role="tablist"]').forEach(tabs => {
    new TabSwitcher(tabs);
  });
});

/* ==========================================
   6. SCROLL DEPTH TRACKING
   ========================================== */

class ScrollTracker {
  constructor(milestones = [25, 50, 75, 90, 100]) {
    this.milestones = milestones;
    this.tracked = new Set();

    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercent = ((scrollTop + windowHeight) / docHeight) * 100;

    this.milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !this.tracked.has(milestone)) {
        this.tracked.add(milestone);

        // Send analytics event
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            event: 'scroll_depth',
            scroll_percentage: milestone
          });
        }

        console.log(`Scroll depth: ${milestone}%`);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ScrollTracker([25, 50, 75, 90, 100]);
});

/* ==========================================
   7. HEADER SCROLL BEHAVIOR
   ========================================== */

function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add scrolled class when scrolled down
    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  });
}

document.addEventListener('DOMContentLoaded', initHeader);

/* ==========================================
   8. 3D TILT EFFECT (Cards)
   ========================================== */

function init3DTilt() {
  const cards = document.querySelectorAll('.service-card');

  // Только на desktop
  if (window.innerWidth < 768) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        scale3d(1.02, 1.02, 1.02)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', init3DTilt);

/* ==========================================
   9. SMOOTH SCROLL TO ANCHOR
   ========================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      // Smooth scroll
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus();
    });
  });
}

document.addEventListener('DOMContentLoaded', initSmoothScroll);

/* ==========================================
   10. ANALYTICS AUTO-TRACKING
   ========================================== */

function initAnalytics() {
  // Auto-track all data-tracking elements
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-tracking]');
    if (!target) return;

    const eventName = target.getAttribute('data-tracking');
    const eventData = { event: eventName };

    // Collect all data-* attributes
    Array.from(target.attributes).forEach(attr => {
      if (attr.name.startsWith('data-') && attr.name !== 'data-tracking') {
        const key = attr.name.replace('data-', '').replace(/-/g, '_');
        eventData[key] = attr.value;
      }
    });

    // Send to Google Tag Manager
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push(eventData);
    }

    console.log('Analytics event:', eventData);
  });

  // Track section visibility
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute('data-section');

        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            event: 'section_view',
            section_name: section,
            section_id: entry.target.id
          });
        }

        console.log('Section viewed:', section);

        // Track once per session
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('section[data-section]').forEach(section => {
    sectionObserver.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', initAnalytics);

/* ==========================================
   11. PERFORMANCE OPTIMIZATIONS
   ========================================== */

// Disable animations on low-end devices
function checkPerformance() {
  // Check if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--duration-base', '0ms');
    document.documentElement.style.setProperty('--duration-slow', '0ms');
    document.documentElement.style.setProperty('--duration-slower', '0ms');
  }

  // Disable heavy animations on mobile
  if (window.innerWidth < 768) {
    document.querySelectorAll('.hero-wave, .floating-icon').forEach(el => {
      el.style.animation = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', checkPerformance);

/* ==========================================
   EXPORT для модулей (ES6)
   ========================================== */

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    WaveAnimation,
    ScrollAnimations,
    Carousel,
    TabSwitcher,
    ScrollTracker
  };
}
