#!/bin/bash


sudo -i
# установка приложений, которые есть в репозитории pacman
pacman -S git polybar pavucontrol pulseaudio binutils gcc dkms libglvnd networkmanager bluez bluez-utils nitrogen rofi alacritty nvidia-settings nvidia thunar bspwm sxhkd xdg-user-dirs dkms nvim neofetch
mkdir -p /$HOME/.config/bspwm/
mkdir -p /$HOME/.config/sxhkd/
cp /usr/share/doc/bspwm/examples/bspwmrc /$HOME/.config/bspwm/
cp /usr/share/doc/bspwm/examples/sxhkdrc /$HOME/.config/sxhkd/
xdg-user-dirs-update


# установка yay
cd /$HOME/Downloads/
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si --noconfirm
cd

yay -S telegram-desktop chromium font-manager cava-git cmatrix

cd /$HOME/Documents/

if [ -d "dotfilles" ]; then
    cd dotfilles
    git pull
else
    git clone https://github.com/Vlad1ckPON/dotfilles -b main
fi
 
cp -r /$HOME/Documents/dotfilles/* /home/$USER/.config/

