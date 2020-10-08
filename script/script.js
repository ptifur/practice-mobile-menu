// responsive veiw menu background
const menu = document.querySelector('.mobile_menu')
const menuButton = document.querySelector('.menu_button')
const menuLinks = document.querySelectorAll('.mobile_menu ul li a')
const body = document.querySelector('body')

// menu button
menuButton.addEventListener('click', toggleMenu)
// menu items
menuLinks.forEach((menuLink) => menuLink.addEventListener('click', toggleMenu))

function toggleMenu() {
    menu.classList.toggle('mobile_menu_show')
    // smooth transition
    if (!menu.classList.contains('mobile_menu_transition')) {
        menu.classList.add('mobile_menu_transition')}
    // prevent scrolling when menu is open
    body.classList.toggle('lock')
}