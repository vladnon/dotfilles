export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="agnoster"


plugins=( git zsh-autosuggestions z zsh-syntax-highlighting thefuck )

source $ZSH/oh-my-zsh.sh


alias ufetch="bash ~/Downloads/ufetch/ufetch-arch"
alias minecraft="java -jar ~/Downloads/TLauncher.v10/TLauncher.jar"
alias ls="eza --color=always --tree --level=1 --long --git --no-filesize --icons=always --no-time --no-user --no-permissions"
alias pacman="sudo pacman"
alias see="gpicview"

# alias ls="eza --color=always --git --no-filesize --icons=always "

function pipes(){
    command ~/pipes.sh/pipes.sh
}

function clearn() {
    command clear
    ufetch
}

eval $(thefuck --alias)
eval "$(zoxide init zsh)"
