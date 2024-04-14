const btnNav = document.querySelector('.nav-menu');
const btnNavIonicon = document.querySelector('.nav-menu ion-icon');
const menuDesplegable = document.querySelector('.nav-desplegable');

btnNavIonicon.onclick = function() {
    menuDesplegable.classList.toggle('active');
    const abierto = menuDesplegable.classList.contains('active');
    if (abierto) {
        btnNavIonicon.setAttribute('name', 'close-outline');
    } else {
        btnNavIonicon.setAttribute('name', 'apps-outline');
    }
}