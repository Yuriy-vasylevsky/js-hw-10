import menuCards from '../src/templates/menu-card.hbs';
import menu from '../src/menu.json'

const cardMurckup = menuCards({menu})


const list = document.querySelector('.js-menu')
const themeSwitch = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
// console.log("🚀 ~ file: index.js ~ line 10 ~ body", body)

list.insertAdjacentHTML('beforeend', cardMurckup)

themeSwitch.addEventListener('change', changeTheme )


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// localStorage.setItem('theme', (Theme.LIGHT))

function changeTheme() {
    let currentTheme = localStorage.setItem('theme', (Theme.LIGHT))
    // console.log(currentTheme)

    if(themeSwitch.checked){
        localStorage.setItem('theme', (Theme.DARK))
        body.classList.add(localStorage.getItem('theme'))
        body.classList.remove(Theme.LIGHT)
        
        
    } else {
        localStorage.setItem('theme', (Theme.LIGHT))
        body.classList.add(localStorage.getItem('theme'))
        body.classList.remove(Theme.DARK)
    }
       
}

function currentTheme() {
    if(localStorage.getItem('theme') === Theme.DARK) {
        return  themeSwitch.checked = true,
        body.classList.add(Theme.DARK)

    }
}

currentTheme()