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
            item_1.innerHTML = '<a href=""><div class="index_header"><p class="index_header_text">Black holes</p></div></a>'
            first_item = false

        } else if (number_1 == 2 && first_item) {
            item_1.innerHTML = '<a href=""><div class="index_header"><p class="index_header_text">Planets</p></div></a>'
            first_item = false

        } else if (number_1 == 3 && first_item) {
            item_1.innerHTML = '<a href=""><div class="index_header"><p class="index_header_text">Stars</p></div></a>'
            first_item = false

        } else if (number_2 == 1) {

            item_2.innerHTML = '<a href=""><div class="index_header"><p class="index_header_text">Black holes</p></div></a>'

        } else if (number_2 == 2) {

            item_2.innerHTML = '<a href=""><div class="index_header"><p class="index_header_text">Planets</p></div></a>'

        } else if (number_2 == 3) {

            item_2.innerHTML = '<a href=""><div class="index_header"><p class="index_header_text">Stars</p></div></a>'

        }
        i += 1

    }
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