# ALODA — AI integration agency website

The website of ALODA, a studio that builds and integrates custom AI solutions for business. The repository contains the original page exports (home, services, case studies, about) and a cleaned, framework-free **standalone** version of the landing with its own design system.

## Standalone site

```
standalone_site/
├── index.html
├── css/
│   ├── design-tokens.css   — design-system variables and tokens
│   ├── components.css      — reusable UI components
│   └── main.css            — layout and section styles
├── js/
│   ├── animations.js       — hero animation, carousel, tabs, scroll reveals
│   └── main.js             — initialisation
└── images/
```

Highlights: an animated neural-network hero, floating icons, tabbed services section, testimonials carousel, scroll animations and a fully responsive layout.

## Run locally

```bash
cd standalone_site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

nginx in Docker:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## Repository layout

```
mainpage/, services/, our_cases/, about/  — original page exports
clean_html*.py, final_clean.py            — scripts that cleaned the exports into the standalone version
docker/, Dockerfile, docker-compose*.yml  — nginx-based deployment
DESIGN_SYSTEM.md, IMPLEMENTATION_GUIDE.md — design system and implementation notes
```
