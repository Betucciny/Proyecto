function hideMenu(event){
    event.currentTarget.removeEventListener('click', hideMenu);
    const nav = document.querySelector('.nav')
    document.body.classList.add('quieto')
    nav.classList.remove('menu-abierto')
    document.body.classList.remove('quieto')
    event.currentTarget.addEventListener('click', deployMenu);
}

function deployMenu(event){
    event.currentTarget.removeEventListener('click', deployMenu);
    const nav = document.querySelector('.nav')
    nav.classList.add('menu-abierto')
    document.body.classList.add('quieto')
    event.currentTarget.addEventListener('click', hideMenu);
}


const menu = document.querySelector('#menu');
menu.addEventListener('click', deployMenu);