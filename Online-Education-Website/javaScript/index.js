let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
} 

$(document).ready(function(){

    $('#menu').click(function(){
        $('.navbar').toggleClass('nav-toggle');
});
    
})