#!/bin/bash

echo 'Installing all apps...'

# установка приложений, которые есть в репозитории pacman
sudo pacman -S --noconfirm git polybar pavucontrol ripgrep binutils gcc npm dkms libglvnd  networkmanager bluez bluez-utils nitrogen rofi alacritty nvidia-settings nvidia thunar bspwm sxhkd xdg-user-dirs
mkdir -p /home/$USER/.config/bspwm/
mkdir -p /home/$USER/.config/sxhkd/
cp /usr/share/doc/bspwm/examples/bspwmrc /home/$USER/.config/bspwm/
cp /usr/share/doc/bspwm/examples/sxhkdrc /home/$USER/.config/sxhkd/
xdg-user-dirs-update

echo 'All pacman apps installed successfully, start installing yay'

# установка yay
cd /home/$USER/Downloads/
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si --noconfirm
cd

echo 'yay installed successfully, start installing aur apps'
yay -S --noconfirm telegram-desktop visual-studio-code-bin chromium font-manager cava cmatrix

echo 'установка и настройка astranvim'
npm install node pyright tree-sitter-cli
git clone --depth 1 https://github.com/AstroNvim/template ~/.config/nvim
# remove template's git connection to set up your own later
rm -rf ~/.config/nvim/.git

echo 'aur installed successfully, start cloning config repo'
cd /home/$USER/Documents/

if [ -d "dotfilles" ]; then
    cd dotfilles
    git pull
else
    git clone https://github.com/Vlad1ckPON/dotfilles -b laptop
fi
 
cp -r /home/$USER/Documents/dotfilles/* /home/$USER/.config/

echo 'installing finished successfully, please reboot your device'
