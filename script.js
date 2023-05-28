const navlistEl = document.querySelector('[data-navlist]')
const navOpenEl = document.querySelector('[data-open-menu]')
const navCloseEl = document.querySelector('[data-close-menu]')

function addEventOnElements(element, eventType, callback){
    element.addEventListener(eventType, callback)
}

addEventOnElements(navOpenEl, 'click', () => {
    navlistEl.classList.add('active')
    navCloseEl.classList.add('active')
})

addEventOnElements(navCloseEl, 'click', () => {
    navlistEl.classList.remove('active')
    navCloseEl.classList.remove('active')
})