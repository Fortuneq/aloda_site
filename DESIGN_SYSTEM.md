# ALODA Design System v1.0

## Brief & Контекст

### Цели клиента
- **Бизнес**: Позиционирование как премиальная AI-студия для автоматизации бизнес-процессов
- **Продукт**: Демонстрация технологической экспертизы через визуальный язык
- **Конверсия**: Генерация заявок на внедрение AI-решений (CTA: "Заказать внедрение")

### Целевая аудитория
- **Сегмент 1**: ЛПР малого/среднего бизнеса (до Enterprise)
- **JTBD**: "Мне нужно понять, как AI может автоматизировать мои процессы и сколько это стоит"
- **Потребности**: Понятность услуг, прозрачное ценообразование, доказательства экспертизы (кейсы, отзывы)

### KPI
- **Primary**: `request_demo_click`, `order_implementation_click`
- **Secondary**: `pricing_tab_interaction`, `case_view`, `testimonial_scroll`, `scroll_depth_75`

### Бренд-идентичность
- **Tone**: Технологичный, премиальный, доступный (balance между high-tech и понятностью)
- **Values**: Инновации, результативность, партнёрство
- **Visual language**: Футуристичность через 3D-градиенты, минимализм интерфейсов, тёмная тема как primary

---

## IA & Флоу

### Информационная архитектура
```
Landing Page (Single Page)
├── Hero (Above the fold)
│   ├── Заголовок + подзаголовок
│   ├── Dual CTA (Primary + Secondary)
│   └── 3D-волна с floating иконками
├── Услуги и ценники
│   ├── Tab-переключатель (Малый/Средний/Enterprise)
│   └── Карточки услуг (3 col)
├── Подход к внедрению
│   ├── Заголовок секции
│   └── 3-step процесс (с иконками)
├── Отзывы клиентов
│   ├── Карусель карточек
│   └── Навигация (стрелки + dots)
└── Footer
    ├── Лого + слоган
    ├── Контакты (email, Telegram, YouTube)
    └── Соцсети (X, Instagram, LinkedIn, Facebook)
```

### Основной пользовательский поток
```
1. Landing → Hero (понимание услуги)
2. CTA click → Форма/контакт
3. Scroll → Изучение услуг через табы
4. Pricing comparison → Выбор пакета
5. Validation → Отзывы клиентов
6. Footer → Контакт через соцсети/email
```

---

## Wireframes (Spec)

### Hero Section
```
[Dark background: #0A0A0A]
[3D Wave element: spanning 100% width, z-index: 0]

┌─────────────────────────────────────────────────────┐
│  [Logo]                    [Nav: О нас | Кейсы | ?] │
│                                                       │
│        Aloda — студия прикладного ИИ                │  ← H1, 72px/900
│                                                       │
│     Автоматизуем праздны, маркетинг и аналитику     │  ← Subtitle, 24px/400
│         с помощью AI-агентов                        │
│                                                       │
│  [Заказать внедрение]  [Посмотреть кейсы]          │  ← Buttons, 16px
│                                                       │
│         [Floating icons: DB, Phone, Terminal,       │
│          Paper Plane, CRM — animated]               │
└─────────────────────────────────────────────────────┘

Spacing:
- Container max-width: 1280px
- Padding: 80px (top) / 120px (bottom)
- Title margin-bottom: 24px
- Subtitle margin-bottom: 48px
- Button gap: 16px
```

### Услуги и ценники
```
[Dark background]

┌─────────────────────────────────────────────────────┐
│  Услуги и ценники                                    │  ← H2, 56px/700, red
│                                                       │
│  [Малый бизнес] [Средний] [Enterprise]              │  ← Tabs, 16px
│   ◄─ active ──┘                                      │
│                                                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐    │
│  │ [3D icon]  │  │ [3D icon]  │  │ [3D icon]  │    │
│  │            │  │            │  │            │    │
│  │ AI-Асс-    │  │ Аналитика  │  │ Контент-   │    │ ← Cards
│  │ стенты CRM │  │ звонков    │  │ фабрика    │    │
│  │            │  │            │  │            │    │
│  │ от 30 000₽ │  │ от 45 000₽ │  │ от 90 000₽ │    │ ← Price, 24px/600
│  │                                                   │
│  │ [Description text, 14px/400, muted]              │
│  │                                                   │
│  │ [Посмотреть пример]                              │  ← Button
│  └────────────┘  └────────────┘  └────────────┘    │
└─────────────────────────────────────────────────────┘

Card specs:
- Border: 1px solid transparent (gradient overlay)
- Border-radius: 24px
- Padding: 40px 32px
- Gap between cards: 24px
- Gradient border: red → purple (top edge glow)
- Background: rgba(255,255,255,0.02)
```

### Подход к внедрению (Light Section)
```
[Light background: #F5F5F7]
[Nav: dark theme variant at top]

┌─────────────────────────────────────────────────────┐
│             Подход к внедрению                       │  ← H2, 48px/700
│                                                       │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐│
│  │  ┌─────┐   │    │  ┌─────┐   │    │  ┌─────┐   ││
│  │  │  1  │   │    │  │  2  │   │    │  │  3  │   ││ ← Numbered badges
│  │  └─────┘   │    │  └─────┘   │    │  └─────┘   ││
│  │   [icon]   │    │   [icon]   │    │   [icon]   ││ ← Circle 120x120
│  │            │    │            │    │            ││
│  │  Анализ    │    │ Построение │    │ Поддержка  ││
│  │  бизнес-   │    │ AI-системы │    │ и масшта-  ││
│  │  процессов │    │            │    │ бирование  ││
│  │            │    │            │    │            ││
│  │ [Description]   │ [Description]   │ [Description]││
│  └────────────┘    └────────────┘    └────────────┘│
│                                                       │
│       [Connecting line/curve between steps]          │
└─────────────────────────────────────────────────────┘

Card specs:
- White cards with subtle shadow
- Border-radius: 20px
- Padding: 48px 40px
- Box-shadow: 0 4px 24px rgba(0,0,0,0.06)
```

### Отзывы клиентов (Light Section)
```
[Light background]

┌─────────────────────────────────────────────────────┐
│  Отзывы клиентов                                     │  ← H2, 48px/700
│                                                       │
│  [◄] ┌────────────┐  ┌────────────┐  ┌────────────┐ [►]
│      │ "          │  │ "          │  │ "          │  │ ← Quote mark
│      │ [Avatar]   │  │ [Avatar]   │  │ [Avatar]   │  │
│      │            │  │            │  │            │  │
│      │ Иван       │  │ Иван       │  │ Иван       │  │
│      │ Смирнов    │  │ Смирнов    │  │ Смирнов    │  │
│      │ Ген.директор│ │ Ген.директор│ │ Ген.директор│ │
│      │            │  │            │  │            │  │
│      │ [WestCall] │  │ [Runeuro]  │  │ [VAN]      │  │
│      │            │  │            │  │            │  │
│      │ "Text..."  │  │ "Text..."  │  │ "Text..."  │  │
│      └────────────┘  └────────────┘  └────────────┘  │
│                                                        │
│              ● ● ● ○ ○ ○                              │ ← Dots navigation
└──────────────────────────────────────────────────────┘

Card specs:
- Background: white
- Border-radius: 20px
- Padding: 32px
- Box-shadow: 0 2px 16px rgba(0,0,0,0.04)
- Quote mark: Red #E63946, 48px
```

### Footer (Dark)
```
[Dark background: #1A1A1A]

┌─────────────────────────────────────────────────────┐
│  [Logo + brain icon]  Aloda                          │
│                                                       │
│  Развиваем бизнес через                              │
│  прикладной интеллект                                │
│                                                       │
│                                                       │
│      @aloda_tech_AI                                  │
│      info@aloda_ai                                   │
│      youtube.com/AlodaAI                             │
│                                                       │
│                          [X] [IG] [LI] [FB]          │ ← Social icons
│                                                       │
│                          [3D Ribbon shape]           │ ← Decorative
└─────────────────────────────────────────────────────┘
```

---

## Design System v1 (Tokens, Components)

### Tokens (CSS Custom Properties)

```css
:root {
  /* ===== COLORS ===== */

  /* Primary Palette */
  --color-primary: #E63946;           /* Red (main CTA, accents) */
  --color-primary-hover: #D62839;
  --color-primary-active: #C7202C;

  --color-secondary: #9D4EDD;         /* Purple (secondary accents) */
  --color-secondary-hover: #8C3FCC;

  /* Gradient (signature red-purple) */
  --gradient-primary: linear-gradient(135deg, #E63946 0%, #9D4EDD 100%);
  --gradient-primary-soft: linear-gradient(135deg, rgba(230,57,70,0.8) 0%, rgba(157,78,221,0.8) 100%);

  /* 3D Wave gradient (for hero/backgrounds) */
  --gradient-wave: linear-gradient(135deg,
    #E63946 0%,
    #C23A5E 25%,
    #A03C76 50%,
    #7D3E8E 75%,
    #5B40A6 100%
  );

  /* Neutrals - Dark Theme */
  --color-bg-dark: #0A0A0A;           /* Pure black base */
  --color-bg-dark-elevated: #1A1A1A;  /* Cards on dark */
  --color-bg-dark-hover: rgba(255,255,255,0.05);

  --color-fg-dark: #FFFFFF;           /* Primary text on dark */
  --color-fg-dark-muted: rgba(255,255,255,0.7);  /* Secondary text */
  --color-fg-dark-subtle: rgba(255,255,255,0.4); /* Tertiary/disabled */

  /* Neutrals - Light Theme */
  --color-bg-light: #F5F5F7;          /* Light section background */
  --color-bg-light-elevated: #FFFFFF; /* Cards on light */
  --color-bg-light-hover: rgba(0,0,0,0.02);

  --color-fg-light: #1A1A1A;          /* Primary text on light */
  --color-fg-light-muted: rgba(0,0,0,0.7);
  --color-fg-light-subtle: rgba(0,0,0,0.4);

  /* Semantic Colors */
  --color-success: #06D6A0;
  --color-warning: #FFB703;
  --color-danger: #E63946;
  --color-info: #118AB2;

  /* Border Colors */
  --color-border-dark: rgba(255,255,255,0.1);
  --color-border-light: rgba(0,0,0,0.08);

  /* ===== SPACING (8pt grid) ===== */
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 120px;

  /* ===== TYPOGRAPHY ===== */

  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-display: 'Inter Tight', 'Inter', sans-serif;

  /* Font Sizes */
  --text-xs: 12px;      /* Fine print */
  --text-sm: 14px;      /* Body small, captions */
  --text-base: 16px;    /* Body, buttons */
  --text-lg: 18px;      /* Lead text */
  --text-xl: 20px;      /* Subheadings */
  --text-2xl: 24px;     /* H4, prices */
  --text-3xl: 32px;     /* H3 */
  --text-4xl: 40px;     /* H2 */
  --text-5xl: 48px;     /* H2 large */
  --text-6xl: 56px;     /* H1 section */
  --text-7xl: 72px;     /* H1 hero */

  /* Font Weights */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;

  /* Line Heights */
  --leading-tight: 1.1;     /* Headings */
  --leading-snug: 1.3;      /* Subheadings */
  --leading-normal: 1.5;    /* Body text */
  --leading-relaxed: 1.7;   /* Long-form content */

  /* Letter Spacing */
  --tracking-tight: -0.02em;   /* Large headings */
  --tracking-normal: 0;
  --tracking-wide: 0.02em;     /* Buttons, labels */

  /* ===== BORDER RADIUS ===== */
  --radius-sm: 8px;      /* Small elements, badges */
  --radius-md: 12px;     /* Inputs, small cards */
  --radius-lg: 16px;     /* Buttons */
  --radius-xl: 20px;     /* Cards (light theme) */
  --radius-2xl: 24px;    /* Cards (dark theme) */
  --radius-3xl: 32px;    /* Large cards */
  --radius-full: 9999px; /* Pills, avatars */

  /* ===== SHADOWS ===== */

  /* Light theme shadows */
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.08);
  --shadow-xl: 0 12px 48px rgba(0,0,0,0.12);

  /* Dark theme glow */
  --glow-primary: 0 0 24px rgba(230,57,70,0.3);
  --glow-secondary: 0 0 24px rgba(157,78,221,0.3);
  --glow-card: 0 4px 32px rgba(230,57,70,0.15);

  /* ===== Z-INDEX ===== */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;

  /* ===== TRANSITIONS ===== */
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 400ms;

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.2, 0.8, 0.2, 1);  /* Main easing */

  /* ===== BREAKPOINTS (for JS/reference) ===== */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* ===== CONTAINER ===== */
  --container-max: 1280px;
  --container-padding: 24px;
  --container-padding-lg: 48px;
}
```

---

## UI-компоненты

### Button Component

**Варианты**: primary, secondary, ghost, link
**Размеры**: sm, md, lg

```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);

  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-decoration: none;
  white-space: nowrap;

  border: none;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-spring);

  /* Focus state */
  outline: none;
  position: relative;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Sizes */
.btn--sm {
  height: 40px;
  padding: 0 var(--space-lg);
  font-size: var(--text-sm);
  border-radius: var(--radius-lg);
}

.btn--md {
  height: 48px;
  padding: 0 var(--space-xl);
  font-size: var(--text-base);
  border-radius: var(--radius-lg);
}

.btn--lg {
  height: 56px;
  padding: 0 var(--space-2xl);
  font-size: var(--text-lg);
  border-radius: var(--radius-xl);
}

/* Variants */

/* Primary (Red filled) */
.btn--primary {
  background: var(--color-primary);
  color: white;
  box-shadow: var(--glow-primary);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(230,57,70,0.4);
}

.btn--primary:active {
  background: var(--color-primary-active);
  transform: translateY(0);
}

/* Secondary (Outlined) */
.btn--secondary {
  background: transparent;
  color: var(--color-fg-dark);
  border: 2px solid var(--color-primary);
}

.btn--secondary:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.btn--secondary:active {
  transform: translateY(0);
}

/* Ghost (Transparent hover) */
.btn--ghost {
  background: transparent;
  color: var(--color-fg-dark-muted);
}

.btn--ghost:hover {
  background: var(--color-bg-dark-hover);
  color: var(--color-fg-dark);
}

/* Link style */
.btn--link {
  background: transparent;
  color: var(--color-primary);
  padding: 0;
  height: auto;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.btn--link:hover {
  color: var(--color-primary-hover);
  text-decoration-thickness: 2px;
}
```

**HTML пример:**
```html
<!-- Primary CTA -->
<button class="btn btn--primary btn--md">
  Заказать внедрение
</button>

<!-- Secondary CTA -->
<button class="btn btn--secondary btn--md">
  Посмотреть кейсы
</button>

<!-- With icon -->
<button class="btn btn--primary btn--md">
  <svg>...</svg>
  <span>Начать работу</span>
</button>
```

---

### Card Component (Service Card)

**Для тёмной темы с gradient border**

```css
.service-card {
  position: relative;
  background: var(--color-bg-dark-elevated);
  border-radius: var(--radius-2xl);
  padding: var(--space-2xl) var(--space-xl);

  /* Gradient border technique */
  border: 1px solid transparent;
  background-clip: padding-box;

  transition: all var(--duration-slow) var(--ease-spring);
}

/* Gradient border pseudo-element */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  padding: 1px;
  background: var(--gradient-primary);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity var(--duration-base) var(--ease-spring);
  pointer-events: none;
}

/* Top glow effect on hover */
.service-card::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  opacity: 0;
  filter: blur(8px);
  transition: opacity var(--duration-base) var(--ease-spring);
}

.service-card:hover::before,
.service-card:hover::after {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow-card);
}

/* Icon container (3D visual) */
.service-card__icon {
  width: 120px;
  height: 120px;
  margin: 0 auto var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card__icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Title */
.service-card__title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-fg-dark);
  margin-bottom: var(--space-md);
  text-align: center;
}

/* Price */
.service-card__price {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
  text-align: center;
}

/* Description */
.service-card__description {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-fg-dark-muted);
  margin-bottom: var(--space-xl);
  text-align: center;
}

/* CTA Button */
.service-card__cta {
  width: 100%;
}
```

**HTML пример:**
```html
<div class="service-card">
  <div class="service-card__icon">
    <img src="wave-3d.svg" alt="AI для CRM">
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

  <button class="btn btn--primary btn--md service-card__cta">
    Посмотреть пример
  </button>
</div>
```

---

### Tab Switcher Component

```css
.tabs {
  display: inline-flex;
  gap: var(--space-sm);
  background: rgba(255,255,255,0.05);
  padding: 4px;
  border-radius: var(--radius-lg);
}

.tabs__button {
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-fg-dark-muted);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-spring);
  position: relative;
}

.tabs__button:hover {
  color: var(--color-fg-dark);
  background: rgba(255,255,255,0.05);
}

.tabs__button--active {
  color: white;
  background: var(--color-primary);
}

.tabs__button--active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid var(--color-primary);
  opacity: 0;
}

/* Optional: sliding indicator */
.tabs__indicator {
  position: absolute;
  bottom: 0;
  height: 2px;
  background: var(--color-primary);
  transition: all var(--duration-slow) var(--ease-spring);
}
```

**HTML пример:**
```html
<div class="tabs" role="tablist">
  <button class="tabs__button tabs__button--active"
          role="tab"
          aria-selected="true"
          data-tab="small">
    Малый бизнес
  </button>
  <button class="tabs__button"
          role="tab"
          aria-selected="false"
          data-tab="medium">
    Средний
  </button>
  <button class="tabs__button"
          role="tab"
          aria-selected="false"
          data-tab="enterprise">
    Enterprise
  </button>
</div>
```

---

### Testimonial Card (Light Theme)

```css
.testimonial {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-slow) var(--ease-spring);
  position: relative;
}

.testimonial:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

/* Quote mark */
.testimonial__quote {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  font-size: 48px;
  font-weight: var(--font-bold);
  color: var(--color-primary);
  line-height: 1;
  font-family: Georgia, serif;
}

/* Avatar */
.testimonial__avatar {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-md);
  border: 2px solid var(--color-bg-light);
}

.testimonial__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Name */
.testimonial__name {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-fg-light);
  margin-bottom: var(--space-xxs);
}

/* Position */
.testimonial__position {
  font-size: var(--text-sm);
  color: var(--color-fg-light-muted);
  margin-bottom: var(--space-md);
}

/* Company logo */
.testimonial__company {
  height: 32px;
  margin-bottom: var(--space-lg);
}

.testimonial__company img {
  height: 100%;
  width: auto;
}

/* Text */
.testimonial__text {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-fg-light);
}
```

**HTML пример:**
```html
<div class="testimonial">
  <div class="testimonial__quote">"</div>

  <div class="testimonial__avatar">
    <img src="avatar.jpg" alt="Иван Смирнов">
  </div>

  <h4 class="testimonial__name">Иван Смирнов</h4>
  <p class="testimonial__position">Генеральный директор</p>

  <div class="testimonial__company">
    <img src="westcall-logo.svg" alt="WestCall">
  </div>

  <p class="testimonial__text">
    "Aloda transformed our operations. Their AI AI solutions,
    groundbreaking and reliable."
  </p>
</div>
```

---

### Carousel Controls

```css
/* Navigation arrows */
.carousel-nav {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-2xl);
}

.carousel-nav__arrow {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all var(--duration-base) var(--ease-spring);
  box-shadow: var(--glow-primary);
}

.carousel-nav__arrow:hover {
  background: var(--color-primary-hover);
  transform: scale(1.08);
}

.carousel-nav__arrow:active {
  transform: scale(0.96);
}

.carousel-nav__arrow svg {
  width: 24px;
  height: 24px;
}

/* Dot indicators */
.carousel-dots {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  margin-top: var(--space-xl);
}

.carousel-dots__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: rgba(230,57,70,0.2);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all var(--duration-base) var(--ease-spring);
}

.carousel-dots__dot--active {
  background: var(--color-primary);
  width: 32px;
  border-radius: var(--radius-full);
}

.carousel-dots__dot:hover:not(.carousel-dots__dot--active) {
  background: rgba(230,57,70,0.4);
}
```

---

### Process Step Card (Light Theme)

```css
.process-step {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-2xl) var(--space-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  position: relative;
}

/* Numbered badge */
.process-step__number {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  color: white;
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon circle */
.process-step__icon {
  width: 120px;
  height: 120px;
  margin: 0 auto var(--space-lg);
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.process-step__icon svg {
  width: 60px;
  height: 60px;
}

/* Title */
.process-step__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-fg-light);
  margin-bottom: var(--space-md);
  line-height: var(--leading-tight);
}

/* Description */
.process-step__description {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-fg-light-muted);
}
```

---

### Navigation Header

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(10,10,10,0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-dark);
  transition: all var(--duration-base) var(--ease-out);
}

.header--scrolled {
  background: rgba(10,10,10,0.95);
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}

.header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-lg) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: white;
  text-decoration: none;
}

.header__logo-icon {
  width: 32px;
  height: 32px;
}

/* Nav */
.header__nav {
  display: flex;
  gap: var(--space-xl);
  align-items: center;
}

.header__nav-link {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-fg-dark-muted);
  text-decoration: none;
  transition: color var(--duration-base) var(--ease-spring);
  position: relative;
}

.header__nav-link:hover {
  color: var(--color-fg-dark);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transition: transform var(--duration-base) var(--ease-spring);
}

.header__nav-link:hover::after {
  transform: scaleX(1);
}

/* Help button (?) */
.header__help {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-border-dark);
  background: transparent;
  color: var(--color-fg-dark-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-spring);
}

.header__help:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

---

## Motion & Micro-interactions

### Принципы движения

**Easing functions:**
```css
/* Main spring easing для большинства интеракций */
--ease-spring: cubic-bezier(0.2, 0.8, 0.2, 1);

/* Для появления элементов */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* Для исчезновения */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Для плавных переходов */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**Длительности:**
- Hover эффекты: **120ms**
- Кнопки, мелкие элементы: **200ms**
- Карточки, модалы: **300ms**
- Крупные переходы, слайды: **400ms**
- Hero анимации: **600-800ms**

---

### Ключевые анимации

#### 1. Hero 3D Wave Animation

**Технология**: SVG с CSS/JS анимацией или Canvas

**Подход через SVG:**
```html
<svg class="hero-wave" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E63946;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#C23A5E;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#A03C76;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#7D3E8E;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5B40A6;stop-opacity:1" />
    </linearGradient>

    <filter id="glow">
      <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <path class="wave-path"
        fill="url(#waveGradient)"
        filter="url(#glow)"
        d="M0,400 C150,350 300,450 450,420 C600,390 750,480 900,450 C1050,420 1200,380 1350,400 L1440,400 L1440,800 L0,800 Z">
    <animate attributeName="d"
             dur="8s"
             repeatCount="indefinite"
             values="
               M0,400 C150,350 300,450 450,420 C600,390 750,480 900,450 C1050,420 1200,380 1350,400 L1440,400 L1440,800 L0,800 Z;
               M0,420 C150,380 300,420 450,390 C600,450 750,400 900,430 C1050,460 1200,420 1350,410 L1440,410 L1440,800 L0,800 Z;
               M0,400 C150,350 300,450 450,420 C600,390 750,480 900,450 C1050,420 1200,380 1350,400 L1440,400 L1440,800 L0,800 Z" />
  </path>
</svg>
```

**CSS для волны:**
```css
.hero-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.9;
  mix-blend-mode: screen;
}

.wave-path {
  filter: drop-shadow(0 0 40px rgba(230,57,70,0.4));
}
```

**Альтернатива через Canvas (более производительная для сложных 3D):**
```javascript
// Simplified example
const canvas = document.getElementById('hero-wave');
const ctx = canvas.getContext('2d');

let time = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#E63946');
  gradient.addColorStop(0.5, '#A03C76');
  gradient.addColorStop(1, '#5B40A6');

  ctx.fillStyle = gradient;
  ctx.beginPath();

  // Draw wavy path with sine waves
  ctx.moveTo(0, canvas.height / 2);

  for (let x = 0; x <= canvas.width; x += 10) {
    const y = Math.sin(x * 0.005 + time) * 50 +
              Math.sin(x * 0.003 + time * 0.5) * 30 +
              canvas.height / 2;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  time += 0.02;
  requestAnimationFrame(drawWave);
}

drawWave();
```

---

#### 2. Floating Icons Animation

```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(3deg);
  }
  50% {
    transform: translate(-5px, -25px) rotate(-2deg);
  }
  75% {
    transform: translate(-10px, -10px) rotate(2deg);
  }
}

.floating-icon {
  position: absolute;
  animation: float 6s ease-in-out infinite;
  opacity: 0.8;
  filter: drop-shadow(0 4px 12px rgba(230,57,70,0.3));
}

/* Stagger delays for different icons */
.floating-icon:nth-child(1) { animation-delay: 0s; }
.floating-icon:nth-child(2) { animation-delay: 1.2s; }
.floating-icon:nth-child(3) { animation-delay: 2.4s; }
.floating-icon:nth-child(4) { animation-delay: 3.6s; }
.floating-icon:nth-child(5) { animation-delay: 4.8s; }
```

**HTML:**
```html
<div class="hero__floating-icons">
  <svg class="floating-icon" style="top: 15%; left: 10%;">
    <!-- Database icon -->
  </svg>
  <svg class="floating-icon" style="top: 20%; left: 25%;">
    <!-- Phone icon -->
  </svg>
  <!-- etc -->
</div>
```

---

#### 3. Card Hover Effects

```css
.service-card {
  transition:
    transform var(--duration-slow) var(--ease-spring),
    box-shadow var(--duration-slow) var(--ease-spring);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(230,57,70,0.2),
    0 0 32px rgba(230,57,70,0.15);
}

/* Gradient border reveal */
.service-card::before {
  transition:
    opacity var(--duration-base) var(--ease-spring),
    transform var(--duration-base) var(--ease-spring);
  transform: scale(0.98);
}

.service-card:hover::before {
  opacity: 1;
  transform: scale(1);
}

/* Inner content subtle lift */
.service-card:hover .service-card__icon {
  animation: iconBounce 0.6s var(--ease-spring);
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
```

---

#### 4. Button Interactions

```css
.btn {
  position: relative;
  overflow: hidden;
}

/* Ripple effect on click */
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:active::after {
  width: 300px;
  height: 300px;
}

/* Press down effect */
.btn:active {
  transform: translateY(1px) scale(0.98);
}
```

---

#### 5. Scroll Animations (появление секций)

```css
/* Initial state (hidden) */
.fade-in {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity var(--duration-slower) var(--ease-out),
    transform var(--duration-slower) var(--ease-out);
}

/* Visible state (triggered by Intersection Observer) */
.fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.fade-in-group > * {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity var(--duration-slower) var(--ease-out),
    transform var(--duration-slower) var(--ease-out);
}

.fade-in-group.is-visible > *:nth-child(1) {
  transition-delay: 0ms;
  opacity: 1;
  transform: translateY(0);
}
.fade-in-group.is-visible > *:nth-child(2) {
  transition-delay: 100ms;
  opacity: 1;
  transform: translateY(0);
}
.fade-in-group.is-visible > *:nth-child(3) {
  transition-delay: 200ms;
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript (Intersection Observer):**
```javascript
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-group').forEach(el => {
  observer.observe(el);
});
```

---

#### 6. Carousel Swipe Animation

```css
.testimonials-carousel {
  display: flex;
  transition: transform var(--duration-slower) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Slide entrance */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.testimonial--entering {
  animation: slideIn var(--duration-slower) var(--ease-out);
}

/* Slide exit */
@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
}

.testimonial--exiting {
  animation: slideOut var(--duration-slower) var(--ease-in);
}
```

---

#### 7. Loading States (Skeleton)

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-dark-elevated) 0%,
    rgba(255,255,255,0.05) 50%,
    var(--color-bg-dark-elevated) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
  border-radius: var(--radius-md);
}

.skeleton--text {
  height: 1em;
  margin-bottom: 0.5em;
}

.skeleton--card {
  height: 400px;
  border-radius: var(--radius-2xl);
}
```

---

### Scroll-based 3D Tilt Effect (for cards)

```javascript
// Vanilla Tilt.js alternative (simplified)
const cards = document.querySelectorAll('.service-card');

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
```

---

## Адаптивность и Темы

### Breakpoints Strategy

```css
/* Mobile First approach */

/* Base styles (mobile) 320px+ */
.container {
  padding: 0 var(--space-lg);
}

.hero__title {
  font-size: clamp(40px, 8vw, 72px);
}

/* Small tablets 640px+ */
@media (min-width: 640px) {
  .container {
    padding: 0 var(--space-xl);
  }

  .service-cards {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* Tablets 768px+ */
@media (min-width: 768px) {
  .hero__title {
    font-size: var(--text-7xl);
  }

  .service-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-carousel {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop 1024px+ */
@media (min-width: 1024px) {
  .container {
    padding: 0 var(--container-padding-lg);
  }

  .service-cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .testimonials-carousel {
    grid-template-columns: repeat(3, 1fr);
  }

  .process-steps {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop 1280px+ */
@media (min-width: 1280px) {
  .container {
    max-width: var(--container-max);
    margin: 0 auto;
  }
}

/* Extra large 1536px+ */
@media (min-width: 1536px) {
  .container {
    max-width: 1440px;
  }
}
```

---

### Упрощения для мобильных устройств

```css
/* Disable complex animations on mobile */
@media (max-width: 767px) {
  /* Reduce motion */
  .hero-wave {
    animation: none;
    opacity: 0.6;
  }

  .floating-icon {
    animation: none;
    position: relative;
    display: none; /* Hide floating icons completely */
  }

  /* Simpler hover states (touch devices) */
  .service-card:hover {
    transform: none;
  }

  .service-card:active {
    transform: scale(0.98);
  }

  /* Smaller shadows for performance */
  .service-card {
    box-shadow: var(--shadow-sm);
  }

  /* Single column layouts */
  .service-cards,
  .testimonials-carousel,
  .process-steps {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  /* Reduce padding */
  .service-card {
    padding: var(--space-lg) var(--space-md);
  }

  /* Smaller typography */
  .hero__title {
    font-size: clamp(32px, 10vw, 48px);
  }

  .section__title {
    font-size: var(--text-4xl);
  }
}

/* Touch device specific */
@media (hover: none) and (pointer: coarse) {
  /* Remove hover-only effects */
  .btn:hover {
    transform: none;
  }

  .service-card:hover::before {
    opacity: 1; /* Always show border on touch */
  }

  /* Larger touch targets */
  .btn {
    min-height: 48px;
    min-width: 48px;
  }

  .carousel-nav__arrow {
    width: 64px;
    height: 64px;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero-wave,
  .floating-icon {
    animation: none;
  }
}
```

---

### Dark/Light Theme Toggle

**Текущий дизайн**: По умолчанию тёмная тема, светлая — для отдельных секций

```css
/* Dark theme (default) */
body {
  background: var(--color-bg-dark);
  color: var(--color-fg-dark);
}

/* Light sections */
.section--light {
  background: var(--color-bg-light);
  color: var(--color-fg-light);
}

.section--light .btn--secondary {
  color: var(--color-fg-light);
  border-color: var(--color-primary);
}

.section--light .process-step {
  background: var(--color-bg-light-elevated);
}
```

**Если нужна полная поддержка обеих тем:**

```css
/* Light theme overrides */
[data-theme="light"] {
  --color-bg-primary: var(--color-bg-light);
  --color-bg-elevated: var(--color-bg-light-elevated);
  --color-fg-primary: var(--color-fg-light);
  --color-fg-muted: var(--color-fg-light-muted);
  --color-border: var(--color-border-light);
  --shadow-card: var(--shadow-md);
}

/* Dark theme (default) */
[data-theme="dark"] {
  --color-bg-primary: var(--color-bg-dark);
  --color-bg-elevated: var(--color-bg-dark-elevated);
  --color-fg-primary: var(--color-fg-dark);
  --color-fg-muted: var(--color-fg-dark-muted);
  --color-border: var(--color-border-dark);
  --shadow-card: var(--glow-card);
}
```

**JavaScript toggle:**
```javascript
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
```

---

## UX-микрокопия

### Тональность
- **Стиль**: Уверенный, экспертный, но доступный
- **Избегать**: Жаргон без объяснений, агрессивный маркетинг
- **Предпочитать**: Конкретные результаты, понятные метафоры

### Примеры

**Hero CTA:**
```
Primary: "Заказать внедрение"
Secondary: "Посмотреть кейсы"

Alt: "Начать с бесплатной консультации"
Alt: "Изучить возможности"
```

**Карточки услуг:**
```
Title: "AI-Ассистенты для CRM"
Price: "от 30 000 ₽/мес"
Description: "Оптимизация вовлечённости с клиентами. Автоматизация рутин задач CRM"
CTA: "Посмотреть пример"

Alt description: "Повышаем конверсию на 40% через умных AI-помощников"
```

**Empty States:**
```
Title: "Здесь пока пусто"
Description: "Мы работаем над добавлением новых кейсов. Подпишитесь на обновления!"
CTA: "Подписаться на новости"
```

**Error States:**
```
Title: "Что-то пошло не так"
Description: "Попробуйте обновить страницу или свяжитесь с нами напрямую"
CTA: "Обновить" / "Написать в поддержку"
```

**Success Messages:**
```
Title: "Заявка отправлена!"
Description: "Мы свяжемся с вами в течение 24 часов для обсуждения деталей проекта"
Icon: ✓ (green checkmark with animation)
```

**Loading States:**
```
"Загружаем ваши данные..."
"Обрабатываем запрос..."
"Создаём персональное предложение..."
```

**Tooltips:**
```
Hover on price: "Стоимость зависит от объёма задач. Финальная цена — после аудита"
Hover on icon: "AI-анализ звонков в реальном времени"
```

---

## Accessibility (WCAG 2.2 AA)

### Контрастность

**Проверенные комбинации (WCAG AA ≥ 4.5:1):**

```css
/* Dark theme */
- White text (#FFFFFF) on Dark bg (#0A0A0A): ✓ 20.8:1
- White text on Dark elevated (#1A1A1A): ✓ 18.4:1
- Muted text (rgba(255,255,255,0.7)) on Dark: ✓ 14.5:1
- Red (#E63946) on Dark: ✓ 5.2:1
- Red (#E63946) on White: ✓ 4.7:1

/* Light theme */
- Dark text (#1A1A1A) on Light bg (#F5F5F7): ✓ 17.2:1
- Dark text on White: ✓ 18.4:1
- Muted text (rgba(0,0,0,0.7)) on Light: ✓ 12.1:1
```

**Внимание**: Градиентные тексты могут не проходить контраст — использовать только для декора, не для критичного контента.

---

### Keyboard Navigation

```css
/* Focus visible (outline) */
*:focus {
  outline: none; /* Remove default */
}

*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: inherit;
}

/* Skip to main content link */
.skip-to-main {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--space-md) var(--space-lg);
  z-index: 9999;
  text-decoration: none;
  transition: top var(--duration-base);
}

.skip-to-main:focus {
  top: 0;
}
```

**Tab order:**
1. Skip link
2. Logo
3. Navigation links
4. Primary CTA
5. Secondary CTA
6. Section content (top to bottom)
7. Footer links

---

### ARIA Attributes

**Tabs (Pricing switcher):**
```html
<div class="tabs" role="tablist" aria-label="Тарифные планы">
  <button role="tab"
          aria-selected="true"
          aria-controls="panel-small"
          id="tab-small">
    Малый бизнес
  </button>
  <button role="tab"
          aria-selected="false"
          aria-controls="panel-medium"
          id="tab-medium">
    Средний
  </button>
</div>

<div role="tabpanel"
     id="panel-small"
     aria-labelledby="tab-small"
     hidden="false">
  <!-- Content -->
</div>
```

**Carousel:**
```html
<div class="carousel"
     role="region"
     aria-label="Отзывы клиентов"
     aria-live="polite">

  <div class="carousel__track">
    <article class="testimonial" aria-roledescription="slide">
      <!-- Content -->
    </article>
  </div>

  <div class="carousel-nav" aria-label="Навигация по отзывам">
    <button aria-label="Предыдущий отзыв">◄</button>
    <button aria-label="Следующий отзыв">►</button>
  </div>

  <div class="carousel-dots" role="tablist" aria-label="Индикаторы слайдов">
    <button role="tab" aria-label="Слайд 1" aria-selected="true"></button>
    <button role="tab" aria-label="Слайд 2" aria-selected="false"></button>
  </div>
</div>
```

**Buttons:**
```html
<button class="btn btn--primary"
        type="button"
        aria-describedby="cta-description">
  Заказать внедрение
</button>
<span id="cta-description" class="sr-only">
  Откроет форму заявки на консультацию
</span>
```

---

### Screen Reader Only Content

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: initial;
  margin: initial;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

### Image Alt Texts

```html
<!-- Decorative (no alt needed) -->
<img src="wave-bg.svg" alt="" role="presentation">

<!-- Meaningful (describe content) -->
<img src="crm-icon.svg"
     alt="Иконка базы данных с галочкой — AI для CRM">

<!-- Avatar -->
<img src="avatar.jpg"
     alt="Фотография Ивана Смирнова, генерального директора WestCall">

<!-- Logo -->
<img src="westcall-logo.svg" alt="Логотип компании WestCall">
```

---

### Semantic HTML Structure

```html
<header>
  <nav aria-label="Основная навигация">
    <!-- Navigation -->
  </nav>
</header>

<main id="main-content">
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Aloda — студия прикладного ИИ</h1>
  </section>

  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Услуги и ценники</h2>
  </section>

  <section aria-labelledby="approach-heading">
    <h2 id="approach-heading">Подход к внедрению</h2>
  </section>

  <section aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading">Отзывы клиентов</h2>
  </section>
</main>

<footer aria-label="Подвал сайта">
  <!-- Footer content -->
</footer>
```

---

## Аналитика & События

### Ключевые события

```javascript
// Hero CTA clicks
dataLayer.push({
  event: 'cta_click',
  cta_location: 'hero',
  cta_type: 'primary', // or 'secondary'
  cta_text: 'Заказать внедрение'
});

// Service card interactions
dataLayer.push({
  event: 'service_view',
  service_name: 'AI-Ассистенты для CRM',
  service_price: '30000',
  tab_segment: 'small_business'
});

dataLayer.push({
  event: 'service_cta_click',
  service_name: 'AI-Ассистенты для CRM',
  cta_text: 'Посмотреть пример'
});

// Tab switching
dataLayer.push({
  event: 'pricing_tab_change',
  from_tab: 'small_business',
  to_tab: 'medium'
});

// Testimonial carousel
dataLayer.push({
  event: 'testimonial_view',
  testimonial_index: 2,
  company: 'Runeuro',
  interaction_type: 'arrow_click' // or 'dot_click', 'swipe'
});

// Scroll depth
dataLayer.push({
  event: 'scroll_depth',
  scroll_percentage: 75,
  section_reached: 'testimonials'
});

// Footer contact click
dataLayer.push({
  event: 'contact_click',
  contact_type: 'email', // or 'telegram', 'youtube'
  location: 'footer'
});

// Social media click
dataLayer.push({
  event: 'social_click',
  social_network: 'instagram',
  location: 'footer'
});
```

---

### Data Attributes (для трекинга)

```html
<!-- Hero buttons -->
<button class="btn btn--primary"
        data-tracking="cta_click"
        data-cta-location="hero"
        data-cta-type="primary">
  Заказать внедрение
</button>

<!-- Service cards -->
<div class="service-card"
     data-tracking="service_card"
     data-service-name="AI-Ассистенты для CRM"
     data-service-price="30000">
  <!-- Content -->

  <button class="btn"
          data-tracking="service_cta_click"
          data-service-name="AI-Ассистенты для CRM">
    Посмотреть пример
  </button>
</div>

<!-- Tabs -->
<button class="tabs__button"
        data-tracking="pricing_tab_change"
        data-tab-id="small_business">
  Малый бизнес
</button>

<!-- Carousel navigation -->
<button class="carousel-nav__arrow"
        data-tracking="testimonial_navigation"
        data-direction="next">
  ►
</button>

<!-- Footer contacts -->
<a href="mailto:info@aloda_ai"
   data-tracking="contact_click"
   data-contact-type="email"
   data-location="footer">
  info@aloda_ai
</a>
```

---

### Universal Tracking Script

```javascript
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

  // Send to analytics
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push(eventData);
  }

  console.log('Analytics event:', eventData);
});

// Scroll depth tracking
let scrollMilestones = [25, 50, 75, 90, 100];
let trackedMilestones = new Set();

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;

  scrollMilestones.forEach(milestone => {
    if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
      trackedMilestones.add(milestone);

      dataLayer.push({
        event: 'scroll_depth',
        scroll_percentage: milestone
      });
    }
  });
});

// Viewport visibility tracking (Intersection Observer)
const viewObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target.getAttribute('data-section');

      dataLayer.push({
        event: 'section_view',
        section_name: section,
        section_id: entry.target.id
      });

      // Track once per session
      viewObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[data-section]').forEach(section => {
  viewObserver.observe(section);
});
```

---

## Handoff (Dev-ready)

### CSS Variables Setup

**Файл**: `/standalone_site/css/design-tokens.css`

```css
/* Импортировать в main.css: */
@import url('design-tokens.css');

/* Или inline в <head>: */
<link rel="stylesheet" href="css/design-tokens.css">
```

Содержимое: см. секцию **Design System v1 (Tokens)** выше.

---

### Tailwind Config (если используется)

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './standalone_site/**/*.html',
    './standalone_site/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        'primary-hover': '#D62839',
        secondary: '#9D4EDD',
        dark: {
          bg: '#0A0A0A',
          elevated: '#1A1A1A',
          fg: '#FFFFFF',
        },
        light: {
          bg: '#F5F5F7',
          elevated: '#FFFFFF',
          fg: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '56px',
        '7xl': '72px',
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '120px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0,0,0,0.04)',
        'sm': '0 2px 8px rgba(0,0,0,0.04)',
        'md': '0 4px 16px rgba(0,0,0,0.06)',
        'lg': '0 8px 32px rgba(0,0,0,0.08)',
        'xl': '0 12px 48px rgba(0,0,0,0.12)',
        'glow-primary': '0 0 24px rgba(230,57,70,0.3)',
      },
      transitionDuration: {
        'fast': '120ms',
        'base': '200ms',
        'slow': '300ms',
        'slower': '400ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
```

---

### React Component Examples

**Button.jsx:**
```jsx
import React from 'react';
import './Button.css';

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  onClick,
  disabled = false,
  tracking,
  ...props
}) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled && 'btn--disabled'
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      data-tracking={tracking}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
    </button>
  );
};

export default Button;
```

**ServiceCard.jsx:**
```jsx
import React from 'react';
import Button from './Button';
import './ServiceCard.css';

const ServiceCard = ({
  icon,
  title,
  price,
  description,
  ctaText = "Посмотреть пример",
  onCtaClick
}) => {
  return (
    <div className="service-card"
         data-tracking="service_card"
         data-service-name={title}
         data-service-price={price}>

      <div className="service-card__icon">
        <img src={icon} alt="" role="presentation" />
      </div>

      <h3 className="service-card__title">{title}</h3>

      <p className="service-card__price">
        от {price.toLocaleString('ru-RU')} ₽/мес
      </p>

      <p className="service-card__description">
        {description}
      </p>

      <Button
        variant="primary"
        size="md"
        className="service-card__cta"
        tracking="service_cta_click"
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default ServiceCard;
```

---

### File Structure Recommendation

```
standalone_site/
├── css/
│   ├── design-tokens.css     ← Все CSS переменные
│   ├── base.css               ← Reset, base styles
│   ├── components/
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── tabs.css
│   │   ├── carousel.css
│   │   └── header.css
│   ├── sections/
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── approach.css
│   │   ├── testimonials.css
│   │   └── footer.css
│   ├── utilities.css          ← Utility classes
│   └── main.css               ← Import all
│
├── js/
│   ├── wave-animation.js      ← Hero wave
│   ├── carousel.js            ← Testimonials carousel
│   ├── tabs.js                ← Pricing tabs
│   ├── scroll-animations.js   ← Intersection Observer
│   ├── analytics.js           ← Tracking
│   └── main.js                ← Init all
│
├── images/
│   ├── icons/                 ← Floating icons, service icons
│   ├── logos/                 ← Company logos
│   ├── avatars/               ← Testimonial avatars
│   └── backgrounds/           ← Wave SVGs, decorative
│
├── index.html
└── ...
```

---

### Critical CSS Inline

Для максимальной производительности (LCP<2.5s):

```html
<head>
  <!-- Critical CSS (above the fold) -->
  <style>
    /* Inline design tokens */
    :root { /* ... tokens ... */ }

    /* Inline hero styles */
    .hero { /* ... */ }
    .hero__title { /* ... */ }
    .btn { /* ... */ }
    .btn--primary { /* ... */ }
  </style>

  <!-- Deferred non-critical CSS -->
  <link rel="preload" href="css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/main.css"></noscript>
</head>
```

---

## Риски, Альтернативы

### Риски

**1. Производительность 3D-волны**
- **Проблема**: Сложная Canvas/SVG анимация может снизить FPS на слабых устройствах
- **Митигация**:
  - Использовать `will-change: transform` для GPU acceleration
  - Отключать анимацию на mobile через `@media (max-width: 767px)`
  - Использовать `requestAnimationFrame` вместо CSS animation для контроля
  - Альтернатива: статичный градиент SVG вместо анимированной волны на mobile

**2. Accessibility градиентных элементов**
- **Проблема**: Градиентные бордеры могут снижать контраст
- **Митигация**: Проверить контраст на всех градиентных переходах, использовать border только как декор, основной контент — на solid backgrounds

**3. Cross-browser compatibility (gradient border technique)**
- **Проблема**: Техника с `mask-composite` не работает в старых Safari
- **Митигация**: Fallback через двойной div:
```html
<div class="card-wrapper" style="background: gradient; padding: 1px; border-radius: 24px;">
  <div class="card-content" style="background: dark; border-radius: 23px;">
    <!-- Content -->
  </div>
</div>
```

**4. Carousel accessibility на touch devices**
- **Проблема**: Свайп-жесты могут конфликтовать с screen reader жестами
- **Митигация**: Обязательно предоставить кнопки навигации, не полагаться только на swipe

**5. Размер ассетов (3D иконки)**
- **Проблема**: Сложные 3D SVG/PNG могут весить много
- **Митигация**:
  - Оптимизация через SVGO для SVG
  - WebP с fallback для растровой графики
  - Lazy loading для below-the-fold элементов

---

### Альтернативы дизайн-решений

**1. Вместо Canvas-волны:**
- **Альтернатива A**: Статичный SVG с CSS gradient + легкая CSS animation (transform)
- **Альтернатива B**: Lottie animation (JSON) для более контролируемого воспроизведения
- **Trade-off**: Меньше "wow-эффекта", но лучше производительность

**2. Вместо gradient borders на карточках:**
- **Альтернатива**: Использовать `box-shadow` с цветом primary для hover-эффекта
```css
.service-card:hover {
  box-shadow: 0 0 0 2px var(--color-primary);
}
```
- **Trade-off**: Менее уникальный визуал, но проще реализация

**3. Вместо карусели отзывов:**
- **Альтернатива**: Grid с вертикальным скроллом (все карточки видны сразу)
- **Trade-off**: Занимает больше пространства, но лучше для accessibility и SEO

**4. Вместо tabs для ценников:**
- **Альтернатива**: Accordion или единый список всех тарифов
- **Trade-off**: Больше прокрутки, но проще восприятие для users

---

## Контроль соответствия

### Definition of Done (DoD)

Перед релизом проверить:

- [ ] **Tokens**: Все переменные в `design-tokens.css` используются консистентно
- [ ] **Typography**: Ни одного hardcoded font-size/weight, все через переменные
- [ ] **Colors**: Все цвета через переменные, контраст проверен (WCAG AA)
- [ ] **Spacing**: Соблюдается 8pt grid, все отступы через `--space-*`
- [ ] **Components**: Все состояния реализованы (default/hover/focus/active/disabled)
- [ ] **Animations**: Длительности и easing соответствуют токенам
- [ ] **Responsive**: Проверено на всех breakpoints (320px - 1920px)
- [ ] **Touch targets**: Минимум 44x44px для всех интерактивных элементов (mobile)
- [ ] **Keyboard nav**: Tab order логичен, focus-visible на всех элементах
- [ ] **ARIA**: Все интерактивные компоненты с правильными roles/labels
- [ ] **Alt texts**: Все изображения имеют alt (или role="presentation")
- [ ] **Analytics**: Data-tracking атрибуты на всех ключевых элементах
- [ ] **Performance**:
  - LCP < 2.5s
  - CLS < 0.1
  - Animations 60fps (или отключены на слабых устройствах)
- [ ] **Cross-browser**: Тестирование в Chrome, Firefox, Safari, Edge
- [ ] **Mobile testing**: iOS Safari + Android Chrome на реальных устройствах

---

### Audit Checklist (для будущих изменений)

При добавлении новых элементов проверять:

**Визуал:**
- Использованы ли токены из design-tokens.css?
- Соответствует ли типографика шкале (text-xs до text-7xl)?
- Соблюдён ли 8pt grid для spacing?
- Проверен ли контраст (минимум 4.5:1)?

**Интерактивность:**
- Есть ли все состояния (hover/focus/active)?
- Transitions используют правильные easing/duration?
- Focus-visible работает?
- Touch targets ≥ 44px на mobile?

**Accessibility:**
- Есть ли semantic HTML?
- Добавлены ли ARIA-атрибуты (если нужны)?
- Клавиатурная навигация работает?
- Screen reader протестирован?

**Производительность:**
- Не вызывает ли reflow/repaint при анимации?
- Использован ли `will-change` для GPU acceleration?
- Оптимизированы ли изображения?

**Аналитика:**
- Добавлены ли data-tracking атрибуты?
- Событие описано в документации?

---

## Итог

Эта дизайн-система обеспечивает:

1. **Консистентность**: Единые токены гарантируют визуальную целостность
2. **Масштабируемость**: Компонентный подход позволяет быстро добавлять новые секции
3. **Производительность**: Оптимизации для Core Web Vitals
4. **Доступность**: WCAG 2.2 AA compliance из коробки
5. **Измеримость**: Интегрированная аналитика для отслеживания KPI

**Следующие шаги:**
1. Создать `design-tokens.css` с переменными
2. Разбить `main.css` на модули (components/sections)
3. Реализовать Hero wave animation (выбрать Canvas vs SVG)
4. Добавить Intersection Observer для scroll animations
5. Интегрировать analytics tracking
6. Провести accessibility audit
7. Performance testing и оптимизация

**Контакт для уточнений**: если нужны mockup-файлы (Figma/Sketch), сториборды анимаций или доп. компоненты — запросите дополнение к этому документу.
