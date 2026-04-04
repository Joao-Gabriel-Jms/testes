function filterColors() {
    let menu = document.querySelector('.menu');

    if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

  
}
function mpreto() {
    let menu = document.querySelector('.mnpreto');

    if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function fpreto() {
    let menu = document.querySelector('.mnpreto');

    if (getComputedStyle(menu).display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function mbranco() {
    let menu = document.querySelector('.mnbranco');

    if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}


function fbranco() {
    let menu = document.querySelector('.mnbranco');

    if (getComputedStyle(menu).display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
