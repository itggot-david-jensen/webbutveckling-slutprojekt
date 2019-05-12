function closedropdown(element) {
    let dropdownHeight = element.scrollHeight
    let elementTransition = element.style.transition
    element.style.transition = ''

    requestAnimationFrame(function () {
        element.style.height = dropdownHeight + 'px'
        element.style.transition = elementTransition

        requestAnimationFrame(function () {
            element.style.height = 0 + 'px'
        })
    })
    element.setAttribute('collapsed', 'true')
}

function opendropdown(element) {
    let dropdownHeight = element.scrollHeight
    element.style.height = dropdownHeight + 'px'
    element.addEventListener('transitioned', function (e) {
        element.removeEventListener('transitioned', arguments.callee)
        element.style.height = null
    })
    element.setAttribute('collapsed', 'false')
}

function content_in_index(load) {
    let number_1 = Math.floor(Math.random() * 3) + 1
    let number_2 = Math.floor(Math.random() * 3) + 1
    let item_1 = document.getElementById("index_item_1")
    let item_2 = document.getElementById("index_item_2")
    let blackholes = '<a href=""><div class="index_header"><p class="index_header_text">Black holes</p></div></a>'
    let planets = '<a href=""><div class="index_header"><p class="index_header_text">Planets</p></div></a>'
    let pulsars = '<a href=""><div class="index_header"><p class="index_header_text">Pulsars</p></div></a>'
    let first_item = true
    let i = 0

    if (number_1 == number_2) {
        number_2 += 1
        if (number_2 > 3) {
            number_2 = 1
        }
    }

    while (i < 2) {

        if (number_1 == 1 && first_item) {
            item_1.innerHTML = blackholes
            item_1.classList.add("index_blackhole_loading")
            first_item = false

        } else if (number_1 == 2 && first_item) {
            item_1.innerHTML = planets
            item_1.classList.add("index_planet_loading")
            first_item = false

        } else if (number_1 == 3 && first_item) {
            item_1.innerHTML = pulsars
            item_1.classList.add("index_pulsar_loading")
            first_item = false

        } else if (number_2 == 1) {
            item_2.innerHTML = blackholes
            item_2.classList.add("index_blackhole_loading")

        } else if (number_2 == 2) {
            item_2.innerHTML = planets
            item_2.classList.add("index_planet_loading")

        } else if (number_2 == 3) {
            item_2.innerHTML = pulsars
            item_2.classList.add("index_pulsar_loading")

        }
        i += 1

    }
}

// Fungerar typ som If/else-sats, är document.readyState === "interactive" eller document.readyState === "complete". ger den callback().
// Annars ger den document.addEventListener("DOMContentLoaded", callback())
function DOMReady(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback())
}

document.querySelector('#dropdownbutton').addEventListener('click', function (e) {
    let dropdown = document.querySelector('.dropdownmenu')
    let isclosed = dropdown.getAttribute('collapsed') === 'true'

    if (isclosed) {
        opendropdown(dropdown)
        dropdown.setAttribute('collapsed', 'false')
    } else {
        closedropdown(dropdown)
    }
})



let dropdown = document.querySelector('.dropdownmenu')



window.onload = closedropdown(dropdown)
window.onload = content_in_index()
DOMReady(function () {
    let item_1 = document.getElementById("index_item_1")
    let item_2 = document.getElementById("index_item_2")

    if (item_1 == document.getElementsByClassName("index_blackhole_loading")[0]) {

        item_1.classList.add("index_blackhole")
        item_1.classList.remove("index_blackhole_loading")

    } else if (item_1 == document.getElementsByClassName("index_planet_loading")[0]) {

        item_1.classList.add("index_planet")
        item_1.classList.remove("index_planet_loading")

    } else if (item_1 == document.getElementsByClassName("index_pulsar_loading")[0]) {

        item_1.classList.add("index_pulsar")
        item_1.classList.remove("index_pulsar_loading")

    } else {
        console.log("something went wrong, contact administrator")
    }

    if (item_2 == document.getElementsByClassName("index_blackhole_loading")[0]) {

        item_2.classList.add("index_blackhole")
        item_2.classList.remove("index_blackhole_loading")

    } else if (item_2 == document.getElementsByClassName("index_planet_loading")[0]) {

        item_2.classList.add("index_planet")
        item_2.classList.remove("index_planet_loading")

    } else if (item_2 == document.getElementsByClassName("index_pulsar_loading")[0]) {

        item_2.classList.add("index_pulsar")
        item_2.classList.remove("index_pulsar_loading")

    } else {
        console.log("something went wrong, contact administrator")
    }

})