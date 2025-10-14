# DOCKER DEPLOYMENT - ALODA САЙТ

## Быстрый старт

### 1. Подготовка на локальной машине
```bash
# Архивируем проект
cd /Users/volkovvladislav/GolandProjects/aloda_site
tar -czf aloda_docker.tar.gz . --exclude='.git' --exclude='mainpage' --exclude='about' --exclude='services' --exclude='our_cases'

# Загружаем на VPS
scp aloda_docker.tar.gz user@your-vps:/home/user/
```

### 2. Деплой на VPS
```bash
# Подключаемся к VPS
ssh user@your-vps

# Распаковываем
cd /home/user/
tar -xzf aloda_docker.tar.gz
cd aloda_site/

# Создаем необходимые директории
mkdir -p ssl/letsencrypt ssl/nginx logs/nginx logs/certbot

# Запускаем сайт
docker-compose up -d
```

### 3. Проверка
```bash
# Проверяем статус контейнеров
docker-compose ps

# Проверяем логи
docker-compose logs aloda-web

# Проверяем сайт
curl http://localhost
```

## Структура Docker файлов

```
.
├── Dockerfile                 # Основной образ с nginx
├── docker-compose.yml         # Конфигурация для разработки/тестирования
├── docker-compose.prod.yml    # Продакшн настройки
└── docker/
    ├── nginx.conf             # Базовая конфигурация nginx
    └── nginx.prod.conf        # Продакшн конфигурация с HTTPS
```

## Команды управления

### Основные команды
```bash
# Запуск в фоне
docker-compose up -d

# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Просмотр логов
docker-compose logs -f aloda-web

# Обновление (пересборка образа)
docker-compose up -d --build

# Проверка статуса
docker-compose ps
```

### Продакшн команды
```bash
# Запуск в продакшне с SSL
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Остановка продакшн
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
```

## Настройка SSL (Let's Encrypt)

### 1. Подготовка конфигурации
```bash
# Редактируем домен в конфигах
nano docker/nginx.prod.conf
# Замените your-domain.com на ваш домен

nano docker-compose.prod.yml
# Замените your-domain.com на ваш домен
```

### 2. Получение SSL сертификата
```bash
# Создаем директории для SSL
mkdir -p ssl/www

# Временно запускаем HTTP версию
docker-compose up -d

# Получаем сертификат
docker-compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email your-email@domain.com \
  --agree-tos \
  --no-eff-email \
  -d your-domain.com \
  -d www.your-domain.com

# Переключаемся на HTTPS версию
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### 3. Автоматическое обновление SSL
SSL сертификаты будут автоматически обновляться через контейнер certbot.

## Мониторинг и логи

### Просмотр логов
```bash
# Логи nginx
docker-compose exec aloda-web tail -f /var/log/nginx/access.log
docker-compose exec aloda-web tail -f /var/log/nginx/error.log

# Логи из файлов на хосте
tail -f logs/nginx/access.log
tail -f logs/nginx/error.log
```

### Мониторинг ресурсов
```bash
# Использование ресурсов контейнерами
docker stats

# Детальная информация о контейнере
docker inspect aloda-website
```

## Обновление сайта

### 1. Обновление контента
```bash
# Изменяем файлы в standalone_site/
nano standalone_site/index.html

# Пересобираем и перезапускаем
docker-compose up -d --build
```

### 2. Обновление с новой версией
```bash
# Загружаем новую версию на VPS
scp aloda_docker_new.tar.gz user@your-vps:/home/user/

# На VPS
cd /home/user/aloda_site/
docker-compose down
cd ..
tar -xzf aloda_docker_new.tar.gz
cd aloda_site/
docker-compose up -d --build
```

## Резервное копирование

### Создание бэкапа
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/user/backups"

# Создаем директорию для бэкапов
mkdir -p $BACKUP_DIR

# Бэкап файлов сайта
tar -czf $BACKUP_DIR/aloda_site_$DATE.tar.gz /home/user/aloda_site/standalone_site/

# Бэкап SSL сертификатов
tar -czf $BACKUP_DIR/aloda_ssl_$DATE.tar.gz /home/user/aloda_site/ssl/

# Бэкап конфигурации Docker
tar -czf $BACKUP_DIR/aloda_docker_config_$DATE.tar.gz /home/user/aloda_site/docker/ /home/user/aloda_site/docker-compose*.yml /home/user/aloda_site/Dockerfile

# Удаляем старые бэкапы (старше 30 дней)
find $BACKUP_DIR -name "aloda_*" -mtime +30 -delete

echo "Backup completed: $DATE"
```

### Автоматические бэкапы
```bash
# Добавляем в crontab
crontab -e

# Ежедневный бэкап в 3:00
0 3 * * * /home/user/backup_aloda.sh
```

## Масштабирование

### Load Balancer (при необходимости)
```yaml
# docker-compose.scale.yml
version: '3.8'
services:
  nginx-lb:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx-lb.conf:/etc/nginx/nginx.conf
    depends_on:
      - aloda-web-1
      - aloda-web-2

  aloda-web-1:
    extends:
      file: docker-compose.yml
      service: aloda-web
    ports: []

  aloda-web-2:
    extends:
      file: docker-compose.yml
      service: aloda-web
    ports: []
```

## Устранение неполадок

### Контейнер не запускается
```bash
# Проверяем ошибки
docker-compose logs aloda-web

# Проверяем конфигурацию nginx
docker-compose exec aloda-web nginx -t

# Перезапускаем с пересборкой
docker-compose down
docker-compose up -d --build
```

### Проблемы с SSL
```bash
# Проверяем сертификаты
docker-compose exec aloda-web ls -la /etc/letsencrypt/live/

# Обновляем сертификаты вручную
docker-compose run --rm certbot renew

# Проверяем конфигурацию SSL
docker-compose exec aloda-web openssl s_client -connect localhost:443
```

### Высокое использование ресурсов
```bash
# Ограничиваем ресурсы в docker-compose.yml
services:
  aloda-web:
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
```

## Безопасность

### Firewall настройки
```bash
# Открываем только необходимые порты
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw enable
```

### Обновления безопасности
```bash
# Регулярно обновляем образы
docker-compose pull
docker-compose up -d

# Мониторим CVE уязвимости
docker scout cves aloda-website
```

## Переменные окружения

Создайте `.env` файл для конфигурации:
```bash
# .env
DOMAIN=your-domain.com
EMAIL=your-email@domain.com
NGINX_PORT=80
SSL_PORT=443
```

Используйте в docker-compose.yml:
```yaml
environment:
  - NGINX_HOST=${DOMAIN}
  - NGINX_PORT=${NGINX_PORT}
```