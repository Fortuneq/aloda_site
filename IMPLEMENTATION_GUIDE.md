# Руководство по внедрению ALODA Design System

## Быстрый старт

### 1. Подключение CSS

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALODA — студия прикладного ИИ</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Inter+Tight:wght@700;900&display=swap" rel="stylesheet">

  <!-- Design System CSS -->
  <link rel="stylesheet" href="css/design-tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Content -->
</body>
</html>
```

### 2. Подключение JavaScript

```html
<!-- Before closing </body> -->
<script src="js/animations.js"></script>
</body>
</html>
```

---

## Структура Hero секции

```html
<!-- Hero Section -->
<section class="hero" data-section="hero">
  <!-- Canvas для 3D волны -->
  <canvas id="hero-wave" class="hero-wave"></canvas>

  <!-- Floating Icons (только desktop) -->
  <div class="hero__floating-icons">
    <svg class="floating-icon" data-speed="0.05" style="top: 15%; left: 10%;">
      <!-- Database icon SVG -->
    </svg>
    <svg class="floating-icon" data-speed="0.08" style="top: 20%; right: 15%;">
      <!-- Phone icon SVG -->
    </svg>
    <svg class="floating-icon" data-speed="0.06" style="bottom: 30%; left: 20%;">
      <!-- Terminal icon SVG -->
    </svg>
    <!-- Add more icons -->
  </div>

  <div class="container">
    <div class="hero__content fade-in">
      <h1 class="hero__title">
        Aloda — студия прикладного ИИ
      </h1>

      <p class="hero__subtitle">
        Автоматизуем праздны, маркетинг и аналитико
        <br>с помощью AI-агентов
      </p>

      <div class="hero__cta">
        <button class="btn btn--primary btn--lg"
                data-tracking="cta_click"
                data-cta-location="hero"
                data-cta-type="primary">
          Заказать внедрение
        </button>

        <button class="btn btn--secondary btn--lg"
                data-tracking="cta_click"
                data-cta-location="hero"
                data-cta-type="secondary">
          Посмотреть кейсы
        </button>
      </div>
    </div>
  </div>
</section>
```

**CSS для Hero:**

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-bg-dark);
}

.hero-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.9;
}

.hero__content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(40px, 8vw, 72px);
  font-weight: var(--font-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-fg-dark);
  margin-bottom: var(--space-lg);
}

.hero__subtitle {
  font-size: clamp(18px, 3vw, 24px);
  line-height: var(--leading-normal);
  color: var(--color-fg-dark-muted);
  margin-bottom: var(--space-2xl);
}

.hero__cta {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Floating icons container */
.hero__floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
}

.floating-icon {
  position: absolute;
  width: 64px;
  height: 64px;
  opacity: 0.6;
  filter: drop-shadow(0 4px 12px rgba(230,57,70,0.3));
}

/* Mobile */
@media (max-width: 767px) {
  .hero__floating-icons {
    display: none;
  }

  .hero-wave {
    opacity: 0.4; /* Reduce for readability */
  }

  .hero__cta {
    flex-direction: column;
  }

  .hero__cta .btn {
    width: 100%;
  }
}
```

---

## Секция Услуги и Ценники

```html
<section class="services" data-section="services">
  <div class="container">
    <h2 class="section__title">
      Услуги и ценники
    </h2>

    <!-- Tabs -->
    <div class="tabs" role="tablist" aria-label="Тарифные планы">
      <button class="tabs__button tabs__button--active"
              role="tab"
              aria-selected="true"
              aria-controls="panel-small"
              id="tab-small"
              data-tracking="pricing_tab_change"
              data-tab-id="small_business">
        Малый бизнес
      </button>
      <button class="tabs__button"
              role="tab"
              aria-selected="false"
              aria-controls="panel-medium"
              id="tab-medium"
              data-tracking="pricing_tab_change"
              data-tab-id="medium">
        Средний
      </button>
      <button class="tabs__button"
              role="tab"
              aria-selected="false"
              aria-controls="panel-enterprise"
              id="tab-enterprise"
              data-tracking="pricing_tab_change"
              data-tab-id="enterprise">
        Enterprise
      </button>
    </div>

    <!-- Tab Panels -->
    <div role="tabpanel"
         id="panel-small"
         aria-labelledby="tab-small"
         hidden="false">

      <div class="service-cards fade-in-group">
        <!-- Card 1 -->
        <div class="service-card"
             data-tracking="service_card"
             data-service-name="AI-Ассистенты для CRM"
             data-service-price="30000">

          <div class="service-card__icon">
            <img src="images/icons/wave-3d.svg" alt="" role="presentation">
          </div>

          <h3 class="service-card__title">
            AI-Ассистенты для CRM
          </h3>

          <p class="service-card__price">
            от 30 000 ₽/мес
          </p>

          <p class="service-card__description">
            Оптимизация вовлечённости с клиентами.
            Автоматизация рутин задач CRM
          </p>

          <button class="btn btn--primary btn--md"
                  data-tracking="service_cta_click"
                  data-service-name="AI-Ассистенты для CRM">
            Посмотреть пример
          </button>
        </div>

        <!-- Card 2, Card 3... -->
      </div>
    </div>

    <!-- Other tab panels (medium, enterprise) -->
  </div>
</section>
```

**CSS для секции:**

```css
.services {
  padding: var(--space-5xl) 0;
  background: var(--color-bg-dark);
}

.section__title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 56px);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-primary);
  margin-bottom: var(--space-2xl);
  text-align: center;
}

.tabs {
  margin: 0 auto var(--space-3xl);
  display: flex;
  justify-content: center;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .service-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Секция Подход к внедрению (светлая)

```html
<section class="approach theme-light" data-section="approach">
  <div class="container">
    <h2 class="section__title">
      Подход к внедрению
    </h2>

    <div class="process-steps fade-in-group">
      <!-- Step 1 -->
      <div class="process-step">
        <div class="process-step__number">1</div>

        <div class="process-step__icon">
          <svg><!-- Magnifying glass icon --></svg>
        </div>

        <h3 class="process-step__title">
          Анализ<br>бизнес-процессов
        </h3>

        <p class="process-step__description">
          Глубокое исследование текущих операций для
          выявления возможностей оптимизации.
        </p>
      </div>

      <!-- Step 2, Step 3... -->
    </div>

    <!-- Connecting line (optional SVG) -->
    <svg class="process-connector" viewBox="0 0 1200 100">
      <path d="M0,50 Q300,20 600,50 T1200,50"
            stroke="rgba(230,57,70,0.2)"
            stroke-width="2"
            fill="none"
            stroke-dasharray="10,5"/>
    </svg>
  </div>
</section>
```

**CSS:**

```css
.approach {
  padding: var(--space-5xl) 0;
  background: var(--color-bg-light);
  color: var(--color-fg-light);
  position: relative;
}

.approach .section__title {
  color: var(--color-fg-light);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .process-steps {
    grid-template-columns: repeat(3, 1fr);
  }
}

.process-connector {
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
}
```

---

## Секция Отзывы

```html
<section class="testimonials theme-light" data-section="testimonials">
  <div class="container">
    <h2 class="section__title">
      Отзывы клиентов
    </h2>

    <div class="carousel" role="region" aria-label="Отзывы клиентов">
      <div class="carousel__track">
        <!-- Testimonial 1 -->
        <article class="testimonial" aria-roledescription="slide">
          <div class="testimonial__quote">"</div>

          <div class="testimonial__avatar">
            <img src="images/avatars/ivan.jpg" alt="Иван Смирнов">
          </div>

          <h4 class="testimonial__name">Иван Смирнов</h4>
          <p class="testimonial__position">Генеральный директор</p>

          <div class="testimonial__company">
            <img src="images/logos/westcall.svg" alt="WestCall">
          </div>

          <p class="testimonial__text">
            "Aloda transformed our operations. Their AI AI solutions,
            groundbreaking and reliable."
          </p>
        </article>

        <!-- Testimonial 2, 3... -->
      </div>

      <!-- Navigation -->
      <div class="carousel-nav" aria-label="Навигация по отзывам">
        <button class="carousel-nav__arrow"
                data-direction="prev"
                data-tracking="testimonial_navigation"
                aria-label="Предыдущий отзыв">
          &#9664;
        </button>
        <button class="carousel-nav__arrow"
                data-direction="next"
                data-tracking="testimonial_navigation"
                aria-label="Следующий отзыв">
          &#9654;
        </button>
      </div>

      <!-- Dots -->
      <div class="carousel-dots" role="tablist">
        <button class="carousel-dots__dot carousel-dots__dot--active"
                role="tab"
                aria-label="Слайд 1"
                aria-selected="true"></button>
        <button class="carousel-dots__dot"
                role="tab"
                aria-label="Слайд 2"
                aria-selected="false"></button>
        <!-- More dots -->
      </div>
    </div>
  </div>
</section>
```

**CSS:**

```css
.testimonials {
  padding: var(--space-5xl) 0;
  background: var(--color-bg-light);
}

.carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel__track {
  display: flex;
  gap: var(--space-lg);
  transition: transform var(--duration-slower) var(--ease-spring);
}

.testimonial {
  min-width: calc(33.333% - var(--space-lg));
  flex-shrink: 0;
}

@media (max-width: 1023px) {
  .testimonial {
    min-width: calc(50% - var(--space-lg));
  }
}

@media (max-width: 767px) {
  .testimonial {
    min-width: 100%;
  }
}
```

---

## Footer

```html
<footer class="footer">
  <div class="container">
    <div class="footer__content">
      <!-- Left column -->
      <div class="footer__brand">
        <div class="footer__logo">
          <img src="images/logo-icon.svg" alt="" class="footer__logo-icon">
          <span>Aloda</span>
        </div>
        <p class="footer__tagline">
          Развиваем бизнес через<br>прикладной интеллект
        </p>
      </div>

      <!-- Middle column -->
      <div class="footer__contacts">
        <a href="https://t.me/aloda_tech_AI"
           class="footer__link"
           data-tracking="contact_click"
           data-contact-type="telegram"
           data-location="footer">
          @aloda_tech_AI
        </a>
        <a href="mailto:info@aloda_ai"
           class="footer__link"
           data-tracking="contact_click"
           data-contact-type="email"
           data-location="footer">
          info@aloda_ai
        </a>
        <a href="https://youtube.com/AlodaAI"
           class="footer__link"
           data-tracking="contact_click"
           data-contact-type="youtube"
           data-location="footer">
          youtube.com/AlodaAI
        </a>
      </div>

      <!-- Right column - Social icons -->
      <div class="footer__social">
        <a href="#" aria-label="X (Twitter)"
           data-tracking="social_click"
           data-social-network="x"
           data-location="footer">
          <svg><!-- X icon --></svg>
        </a>
        <a href="#" aria-label="Instagram"
           data-tracking="social_click"
           data-social-network="instagram"
           data-location="footer">
          <svg><!-- Instagram icon --></svg>
        </a>
        <a href="#" aria-label="LinkedIn"
           data-tracking="social_click"
           data-social-network="linkedin"
           data-location="footer">
          <svg><!-- LinkedIn icon --></svg>
        </a>
        <a href="#" aria-label="Facebook"
           data-tracking="social_click"
           data-social-network="facebook"
           data-location="footer">
          <svg><!-- Facebook icon --></svg>
        </a>
      </div>

      <!-- Decorative 3D shape -->
      <img src="images/ribbon-3d.svg"
           alt=""
           role="presentation"
           class="footer__decoration">
    </div>
  </div>
</footer>
```

**CSS:**

```css
.footer {
  background: var(--color-bg-dark-elevated);
  padding: var(--space-5xl) 0 var(--space-2xl);
  position: relative;
  overflow: hidden;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  align-items: start;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: white;
  margin-bottom: var(--space-md);
}

.footer__logo-icon {
  width: 40px;
  height: 40px;
}

.footer__tagline {
  color: var(--color-fg-dark-muted);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer__link {
  color: var(--color-fg-dark-muted);
  text-decoration: none;
  transition: color var(--duration-base);
}

.footer__link:hover {
  color: var(--color-primary);
}

.footer__social {
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;
}

.footer__social a {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-base);
}

.footer__social a:hover {
  background: var(--color-primary);
  transform: scale(1.1);
}

.footer__decoration {
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 300px;
  height: auto;
  opacity: 0.6;
  pointer-events: none;
}

@media (max-width: 767px) {
  .footer__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__social {
    justify-content: center;
  }

  .footer__decoration {
    width: 200px;
    right: 0;
  }
}
```

---

## Интеграция Google Tag Manager

```html
<!-- В <head> -->
<script>
  window.dataLayer = window.dataLayer || [];
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->

<!-- После <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

Все события автоматически отправляются через `animations.js` (см. функцию `initAnalytics()`).

---

## Чек-лист перед запуском

- [ ] Шрифты Inter и Inter Tight загружены
- [ ] design-tokens.css подключен первым
- [ ] components.css подключен
- [ ] animations.js подключен перед `</body>`
- [ ] Canvas элемент для волны добавлен: `<canvas id="hero-wave">`
- [ ] Все кнопки имеют data-tracking атрибуты
- [ ] Секции имеют data-section для аналитики
- [ ] Alt-тексты добавлены ко всем изображениям
- [ ] ARIA-атрибуты добавлены к интерактивным компонентам
- [ ] Favicon и meta-теги настроены
- [ ] Google Tag Manager интегрирован
- [ ] Тестирование на mobile (iOS Safari, Android Chrome)
- [ ] Тестирование на desktop (Chrome, Firefox, Safari)
- [ ] Accessibility audit (клавиатурная навигация, screen reader)
- [ ] Performance audit (Lighthouse score)

---

## Дополнительные оптимизации

### Lazy Loading изображений

```html
<img src="placeholder.jpg"
     data-src="real-image.jpg"
     alt="Description"
     loading="lazy"
     class="lazy">
```

### Preload критичных ресурсов

```html
<link rel="preload" href="css/design-tokens.css" as="style">
<link rel="preload" href="fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### Минификация

```bash
# CSS
npx cssnano css/design-tokens.css css/design-tokens.min.css

# JS
npx terser js/animations.js -o js/animations.min.js
```

---

## Поддержка и обновления

Для вопросов и багрепортов:
- Email: dev@aloda.agency
- Telegram: @aloda_dev

Версия дизайн-системы: **v1.0**
Дата последнего обновления: **2025-10-22**
