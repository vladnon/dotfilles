
#!/bin/sh

# Запускаем Alacritty с nvim
alacritty -t Neovim -e nvim &

# Ждём появления окна
sleep 0.5

# Ищем окно с заголовком "Neovim"
WINDOW_ID=$(xdotool search --name "Neovim" | head -n 1)

# Если окно найдено, перемещаем его на рабочий стол '^2'
if [ -n "$WINDOW_ID" ]; then
    bspc node "$WINDOW_ID" -d '^2'
else
    echo "Окно Neovim не найдено"
fi

