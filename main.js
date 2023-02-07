const menuButton = document.querySelector('[data-menu-button]')
const dataMenu = document.querySelectorAll('[data-menu]')

menuButton.addEventListener('click', () => {
    dataMenu.forEach(e => {
        e.toggleAttribute('data-visible')
    })
})