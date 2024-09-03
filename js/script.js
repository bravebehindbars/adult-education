let ham = document.getElementsByClassName('slider')[0]
let menu = document.getElementsByClassName('menu')[0]
let navbar = document.getElementsByClassName('nav-bar')[0]
let sliderImg = document.getElementById('slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/Technology.jpg','./img/administrative.jpg','./img/business.jpg','./img/Tech_Ed2.jpg','./img/healthcare1.webp','./img/healthcare.webp','./img/Ed_Tech.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===7){
        i=0;
    }
}
setInterval(slide,2000)