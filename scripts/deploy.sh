#!/bin/bash

# ALODA Docker Deployment Script
# Usage: ./scripts/deploy.sh [dev|prod]

set -e

ENVIRONMENT=${1:-dev}
PROJECT_NAME="aloda-site"

echo "🚀 Starting ALODA deployment in $ENVIRONMENT mode..."

# Check if Docker and Docker Compose are installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed"
    exit 1
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p ssl/letsencrypt ssl/nginx ssl/www logs/nginx logs/certbot

# Set permissions
chmod -R 755 ssl/ logs/

# Copy environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your actual values before continuing"
    read -p "Press Enter to continue after editing .env file..."
fi

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | xargs)
fi

case $ENVIRONMENT in
    "dev")
        echo "🔧 Starting development environment..."
        docker-compose up -d --build
        ;;
    "prod")
        echo "🌟 Starting production environment..."
        
        # Check if domain is configured
        if [ "$DOMAIN" = "your-domain.com" ]; then
            echo "❌ Please configure your domain in .env file"
            exit 1
        fi
        
        # Update nginx configuration with actual domain
        sed -i "s/your-domain.com/$DOMAIN/g" docker/nginx.prod.conf
        sed -i "s/your-domain.com/$DOMAIN/g" docker-compose.prod.yml
        
        # Start production environment
        docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
        
        echo "🔒 Setting up SSL certificate..."
        sleep 10  # Wait for containers to start
        
        # Get SSL certificate
        docker-compose run --rm certbot certonly \
            --webroot \
            --webroot-path=/var/www/certbot \
            --email $EMAIL \
            --agree-tos \
            --no-eff-email \
            -d $DOMAIN \
            -d www.$DOMAIN || echo "⚠️  SSL setup failed, continuing with HTTP"
        
        # Restart with HTTPS configuration
        docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart aloda-web
        ;;
    *)
        echo "❌ Invalid environment. Use 'dev' or 'prod'"
        exit 1
        ;;
esac

echo "✅ Deployment completed!"
echo "🌐 Your site should be available at:"

if [ "$ENVIRONMENT" = "prod" ]; then
    echo "   - https://$DOMAIN"
    echo "   - https://www.$DOMAIN"
else
    echo "   - http://localhost"
fi

echo ""
echo "📊 Useful commands:"
echo "   docker-compose logs -f aloda-web    # View logs"
echo "   docker-compose ps                   # Check status"
echo "   docker-compose down                 # Stop services"
echo "   docker-compose restart aloda-web   # Restart web server"

# Show container status
echo ""
echo "📈 Container status:"
docker-compose ps