function closedropdown(element){
    let dropdownHeight = element.scrollHeight
    let elementTransition = element.style.transition
    element.style.transition = ''

    requestAnimationFrame(function(){
        element.style.height = dropdownHeight + 'px'
        element.style.transition = elementTransition

        requestAnimationFrame(function(){
            element.style.height = 0 + 'px'
        })
    })
    element.setAttribute('collapsed', 'true')
}

function opendropdown(element){
    let dropdownHeight = element.scrollHeight
    element.style.height = dropdownHeight + 'px'
    element.addEventListener('transitioned',function(e){
        element.removeEventListener('transitioned', arguments.callee)
        element.style.height = null
    })
    element.setAttribute('collapsed', 'false')
}

document.querySelector('#dropdownbutton').addEventListener('click', function(e){
    let dropdown = document.querySelector('.dropdownmenu')
    let isclosed = dropdown.getAttribute('collapsed') === 'true'
    
    if(isclosed){
        opendropdown(dropdown)
        dropdown.setAttribute('collapsed', 'false')
    } else {
        closedropdown(dropdown)
    }
})


let dropdown = document.querySelector('.dropdownmenu')
window.onload = closedropdown(dropdown)