export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="agnoster"
plugins=( git zsh-autosuggestions z zsh-syntax-highlighting thefuck )
source $ZSH/oh-my-zsh.sh


function pipes(){
    command ~/pipes.sh/pipes.sh
}

function clearn() {
    command clear
    ufetch
}

function ufetch() {
    bash ~/Downloads/ufetch/ufetch-arch
}

function vfetch(){
    command python3 ~/vfetch/vfetch.py
}

function list() {
    command ~/list/to_do_list_cli/main
}

function minecraft() {
    command java -jar ~/Downloads/TLauncher.v10/TLauncher.jar 
}
