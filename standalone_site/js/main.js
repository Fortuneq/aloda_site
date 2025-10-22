/**
 * ALODA Main JavaScript
 * ======================
 * Initializes all components and handles main page logic
 * Depends on: animations.js
 */

(function() {
  'use strict';

  /**
   * Application initialization
   */
  const App = {
    init: function() {
      console.log('ALODA Landing Page initialized');

      // Check if animations.js loaded successfully
      if (typeof WaveAnimation === 'undefined') {
        console.warn('animations.js not loaded - some features may not work');
      }

      // Initialize all modules
      this.initSmoothScroll();
      this.initMobileMenu();
      this.initFormHandlers();
      this.logPageLoad();
    },

    /**
     * Smooth scroll for anchor links
     */
    initSmoothScroll: function() {
      const links = document.querySelectorAll('a[href^="#"]');

      links.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');

          // Skip empty or just '#' links
          if (href === '#' || href === '#!') return;

          e.preventDefault();

          const target = document.querySelector(href);
          if (!target) return;

          // Calculate offset for fixed header
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          // Smooth scroll
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        });
      });
    },

    /**
     * Mobile menu toggle (if needed in future)
     */
    initMobileMenu: function() {
      // Currently not needed as we have simple navigation
      // Can be extended if hamburger menu is added
      console.log('Mobile menu initialized');
    },

    /**
     * Form submission handlers
     */
    initFormHandlers: function() {
      // Handle all CTA button clicks
      const ctaButtons = document.querySelectorAll('[data-cta-type]');

      ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          const ctaType = this.getAttribute('data-cta-type');
          const ctaLocation = this.getAttribute('data-cta-location');

          console.log(`CTA clicked: ${ctaType} at ${ctaLocation}`);

          // Primary CTA - open contact form or modal
          if (ctaType === 'primary') {
            App.openContactForm();
          }
          // Secondary CTA - scroll to section
          else if (ctaType === 'secondary') {
            // Already handled by smooth scroll
            return;
          }
        });
      });
    },

    /**
     * Open contact form (placeholder - can be extended)
     */
    openContactForm: function() {
      // For now, just scroll to footer contact
      const footer = document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Or open a modal/form
        alert('Свяжитесь с нами:\nTelegram: @aloda_tech_AI\nEmail: info@aloda.agency');
      }
    },

    /**
     * Log page load for analytics
     */
    logPageLoad: function() {
      // Send page view event
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
          event: 'page_view',
          page_path: window.location.pathname,
          page_title: document.title
        });
      }

      console.log('Page view logged');
    }
  };

  /**
   * Utils
   */
  const Utils = {
    /**
     * Debounce function
     */
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    /**
     * Throttle function
     */
    throttle: function(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    /**
     * Check if element is in viewport
     */
    isInViewport: function(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  };

  /**
   * Performance monitoring
   */
  const Performance = {
    init: function() {
      // Log Web Vitals if available
      if ('PerformanceObserver' in window) {
        this.observeLCP();
        this.observeFID();
        this.observeCLS();
      }

      // Log page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);

        // Send to analytics
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            event: 'performance',
            metric_name: 'page_load_time',
            metric_value: Math.round(loadTime)
          });
        }
      });
    },

    observeLCP: function() {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observation failed:', e);
      }
    },

    observeFID: function() {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observation failed:', e);
      }
    },

    observeCLS: function() {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              console.log('CLS:', clsValue);
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observation failed:', e);
      }
    }
  };

  /**
   * Error handling
   */
  window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);

    // Send to analytics
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        event: 'javascript_error',
        error_message: e.error?.message || 'Unknown error',
        error_stack: e.error?.stack || 'No stack trace'
      });
    }
  });

  /**
   * Initialize everything when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      App.init();
      Performance.init();
    });
  } else {
    // DOM already loaded
    App.init();
    Performance.init();
  }

  /**
   * Export utilities globally (optional)
   */
  window.AlodaApp = App;
  window.AlodaUtils = Utils;

})();
