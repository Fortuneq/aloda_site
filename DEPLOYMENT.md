# ИНСТРУКЦИЯ ПО ДЕПЛОЮ ALODA САЙТА

## Подготовка к деплою

1. **Архивируйте папку `standalone_site`**:
   ```bash
   cd /Users/volkovvladislav/GolandProjects/aloda_site
   tar -czf aloda_site.tar.gz standalone_site/
   ```

2. **Загрузите архив на VPS** (замените данные на свои):
   ```bash
   scp aloda_site.tar.gz user@your-vps-ip:/home/user/
   ```

## Настройка на VPS

### 1. Подключение к VPS и распаковка
```bash
ssh user@your-vps-ip
cd /home/user/
tar -xzf aloda_site.tar.gz
```

### 2. Установка веб-сервера (если не установлен)

**Для Ubuntu/Debian (Nginx):**
```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

**Для CentOS/RHEL (Nginx):**
```bash
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 3. Настройка Nginx

Создайте конфигурацию сайта:
```bash
sudo nano /etc/nginx/sites-available/aloda
```

Добавьте конфигурацию:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /home/user/standalone_site;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle main routes
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
}
```

### 4. Активация сайта
```bash
sudo ln -s /etc/nginx/sites-available/aloda /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Настройка SSL (рекомендуется)

**Установка Certbot:**
```bash
sudo apt install certbot python3-certbot-nginx -y
```

**Получение SSL сертификата:**
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Альтернативный вариант - Apache

### Установка Apache
```bash
sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2
```

### Конфигурация Apache
```bash
sudo nano /etc/apache2/sites-available/aloda.conf
```

Содержимое конфига:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    DocumentRoot /home/user/standalone_site
    
    <Directory /home/user/standalone_site>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
    </Location>
</VirtualHost>
```

Активация:
```bash
sudo a2ensite aloda.conf
sudo systemctl reload apache2
```

## Проверка работоспособности

1. **Откройте браузер** и перейдите на ваш домен
2. **Проверьте все страницы**:
   - Главная: `http://your-domain.com/`
   - О нас: `http://your-domain.com/about.html`
   - Услуги: `http://your-domain.com/services.html`
   - Кейсы: `http://your-domain.com/cases.html`

3. **Проверьте навигацию** - все ссылки должны работать
4. **Проверьте изображения** - должны загружаться корректно

## Настройка домена

1. **В панели управления доменом** настройте A-запись:
   - Тип: A
   - Имя: @ (или оставьте пустым)
   - Значение: IP-адрес вашего VPS

2. **Для www поддомена** добавьте CNAME:
   - Тип: CNAME
   - Имя: www
   - Значение: your-domain.com

## Дополнительные настройки

### Настройка firewall (ufw)
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Мониторинг логов
```bash
# Nginx логи
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Apache логи
sudo tail -f /var/log/apache2/access.log
sudo tail -f /var/log/apache2/error.log
```

### Автоматическое обновление SSL
```bash
# Добавить в crontab
sudo crontab -e

# Добавить строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

## Резервное копирование

Создайте скрипт для бэкапа:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /home/user/backups/aloda_backup_$DATE.tar.gz /home/user/standalone_site/
find /home/user/backups/ -name "aloda_backup_*.tar.gz" -mtime +30 -delete
```

## Устранение неполадок

**Если сайт не открывается:**
1. Проверьте статус веб-сервера: `sudo systemctl status nginx`
2. Проверьте конфигурацию: `sudo nginx -t`
3. Проверьте логи ошибок
4. Убедитесь, что порты 80/443 открыты в firewall

**Если не работают стили/изображения:**
1. Проверьте права доступа к файлам: `sudo chmod -R 755 /home/user/standalone_site/`
2. Проверьте пути в HTML файлах
3. Убедитесь, что все файлы загружены корректно