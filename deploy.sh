#!/usr/bin/env bash
set -euo pipefail

ZIP_URL="https://tmpfiles.org/dl/wfwuVzWmgYcY/eyefi-landing-deploy.zip"
INSTALL_DIR="$HOME/eyefi-landing"

echo "========================================"
echo " Eyefi Landing Page — Auto Installer"
echo "========================================"

# 1. Install Docker if missing
if ! command -v docker &>/dev/null; then
    echo "--> Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker "$USER"
    echo "--> Docker installed."
else
    echo "--> Docker already installed."
fi

# 2. Install unzip if missing
if ! command -v unzip &>/dev/null; then
    echo "--> Installing unzip..."
    sudo apt-get update -qq && sudo apt-get install -y -qq unzip
fi

# 3. Download package
echo "--> Downloading deployment package..."
curl -fsSL "$ZIP_URL" -o /tmp/eyefi-landing.zip

# 4. Extract
echo "--> Extracting..."
mkdir -p "$INSTALL_DIR"
unzip -o /tmp/eyefi-landing.zip -d /tmp/eyefi-extract
cp -r /tmp/eyefi-extract/eyefi-landing-deploy/. "$INSTALL_DIR/"
rm -rf /tmp/eyefi-landing.zip /tmp/eyefi-extract

# 5. Start site
echo "--> Starting site..."
cd "$INSTALL_DIR"

# Run docker compose with sudo if user isn't in docker group yet
if docker info &>/dev/null 2>&1; then
    docker compose up -d web
else
    sudo docker compose up -d web
fi

echo ""
echo "========================================"
echo " Done! Site is live at:"
echo "   http://$(curl -s ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}')"
echo ""
echo " To add SSL, follow the README.txt"
echo " in: $INSTALL_DIR"
echo "========================================"
