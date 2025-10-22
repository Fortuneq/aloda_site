# ALODA Landing Page

Полнофункциональный лендинг для ALODA — студии прикладного ИИ.

## Структура проекта

```
standalone_site/
├── index.html              # Главная страница
├── css/
│   ├── design-tokens.css   # CSS переменные и токены дизайн-системы
│   ├── components.css      # Готовые UI-компоненты
│   └── main.css           # Layout и стили секций
├── js/
│   ├── animations.js       # Анимации (wave, carousel, tabs, scroll)
│   └── main.js            # Инициализация и основная логика
└── images/
    └── favicon.svg         # Иконка сайта
```

## Быстрый старт

### 1. Локальный запуск

**Python (рекомендуется):**
```bash
cd standalone_site
python3 -m http.server 8000
```

Откройте в браузере: http://localhost:8000

**Node.js (альтернатива):**
```bash
cd standalone_site
npx http-server -p 8000
```

**VS Code Live Server:**
- Откройте `index.html` в VS Code
- Нажмите "Go Live" (расширение Live Server)

### 2. Проверка работоспособности

После запуска проверьте:
- ✅ Hero секция с анимированной волной (только desktop)
- ✅ Плавающие иконки (только desktop)
- ✅ Переключение табов в секции "Услуги"
- ✅ Карусель отзывов с кнопками навигации
- ✅ Анимации появления при скролле
- ✅ Адаптивность на мобильных устройствах

## Технологии

- **HTML5** - Семантическая разметка
- **CSS3** - CSS Variables, Grid, Flexbox
- **Vanilla JavaScript** - Без фреймворков
- **Google Fonts** - Inter & Inter Tight

## Особенности

### Дизайн-система
- Полная дизайн-система с токенами в `design-tokens.css`
- Переиспользуемые компоненты в `components.css`
- Консистентная цветовая схема (Red #E63946 → Purple #9D4EDD)

### Анимации
- **Hero Wave** - Canvas-анимация 3D волны
- **Floating Icons** - Плавающие иконки с parallax
- **Scroll Animations** - Появление элементов при скролле
- **Carousel** - Автопрокручивающаяся карусель отзывов
- **Tabs** - Переключение между тарифами

### Адаптивность
- Mobile-first подход
- Breakpoints: 768px, 1024px, 1280px
- Оптимизация для touch-устройств
- Отключение тяжёлых анимаций на мобильных

### Accessibility
- Семантический HTML5
- ARIA-атрибуты для интерактивных элементов
- Keyboard navigation
- Focus-visible для всех кликабельных элементов
- Skip-to-main link
- Screen reader friendly

### Performance
- Lazy loading для анимаций
- Оптимизированные CSS-переменные
- Минимизация repaint/reflow
- Prefers-reduced-motion support

## Развертывание

### На VPS (Nginx)

1. Загрузите папку `standalone_site` на сервер:
```bash
scp -r standalone_site/* user@your-server:/var/www/aloda.agency/
```

2. Настройте Nginx:
```nginx
server {
    listen 80;
    server_name aloda.agency www.aloda.agency;
    root /var/www/aloda.agency;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

3. Перезапустите Nginx:
```bash
sudo systemctl restart nginx
```

### На Vercel

1. Установите Vercel CLI:
```bash
npm i -g vercel
```

2. Разверните:
```bash
cd standalone_site
vercel
```

### На Netlify

1. Перетащите папку `standalone_site` на https://app.netlify.com/drop
2. Или используйте CLI:
```bash
npm i -g netlify-cli
cd standalone_site
netlify deploy --prod
```

## Кастомизация

### Изменение цветов

Отредактируйте `css/design-tokens.css`:
```css
:root {
  --color-primary: #E63946;     /* Ваш основной цвет */
  --color-secondary: #9D4EDD;   /* Вторичный цвет */
}
```

### Изменение контента

Все тексты находятся в `index.html`. Найдите нужную секцию и отредактируйте.

### Добавление секции

1. Добавьте HTML в `index.html`
2. Добавьте стили в `css/main.css`
3. При необходимости добавьте логику в `js/main.js`

## Браузерная поддержка

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## SEO

Настроено:
- ✅ Meta description
- ✅ Meta keywords
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Alt texts для изображений
- ✅ Structured data (можно добавить JSON-LD)

Для улучшения:
1. Добавьте `sitemap.xml`
2. Добавьте `robots.txt`
3. Настройте Google Analytics
4. Добавьте Schema.org markup

## Аналитика

В коде подготовлены события для Google Tag Manager:

```javascript
// Примеры событий
dataLayer.push({
  event: 'cta_click',
  cta_location: 'hero',
  cta_type: 'primary'
});

dataLayer.push({
  event: 'scroll_depth',
  scroll_percentage: 75
});
```

Замените `GTM-XXXXXXX` в `index.html` на ваш ID.

## Производительность

### Оптимизации
- CSS Variables для быстрого рендеринга
- RequestAnimationFrame для плавных анимаций
- Intersection Observer для lazy-loading
- Debounce для scroll events
- Preconnect для Google Fonts

### Рекомендации
- Минифицируйте CSS/JS для продакшена
- Используйте CDN для статики
- Включите HTTP/2
- Настройте кеширование
- Сжимайте изображения

## Контакты и поддержка

- Telegram: @aloda_tech_AI
- Email: info@aloda.agency
- YouTube: youtube.com/@AlodaAI

## Лицензия

© 2025 ALODA. Все права защищены.

---

**Дата создания**: October 22, 2025
**Версия**: 1.0.0
**Дизайн-система**: ALODA Design System v1.0
