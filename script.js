let silla = document.getElementById('silla');
let pc = document.getElementById('pc');
let alfombra = document.getElementById('alfombra');

let piedra1 = document.getElementById('piedra1');
let piedra2 = document.getElementById('piedra2');

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {

    let value = window.scrollY;

    silla.style.left = value * -2.5 + 'px';
    alfombra.style.left = value * -1.5 + 'px';
    pc.style.left = value * 2.5 + 'px';

    piedra1.style.top = value * -0.5 + 'px';
    piedra2.style.top = value * -0.5 + 'px';
   

});

toggle.onclick = function(){
    menu.classList.toggle('active')
}







