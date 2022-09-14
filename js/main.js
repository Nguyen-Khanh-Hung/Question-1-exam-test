const btn_show_menu=document.querySelector('.btn-bars')
const menu=document.querySelector('.nav-list-resonsive')

const overlay=document.querySelector('.overlay')
console.log(overlay);

function showMenu(){
    overlay.classList.toggle('active')
    menu.classList.toggle('active')
}
function hideOverlay(){
    showMenu()
}
