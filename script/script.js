const menu = document.querySelector('.mobile_menu')
const menuButton = document.querySelector('.menu_button')

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('mobile_menu_show')
    if (!menu.classList.contains('mobile_menu_transition')) {
        menu.classList.add('mobile_menu_transition')
    }
}