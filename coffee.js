const glass = document.querySelector('.fa-magnifying-glass');
const div_search = document.querySelector('.div_of_search');
const div_search_input = document.querySelector('.div_of_search input');
const div_of_shopping = document.querySelector('.div_of_shopping');
const fa_cart_shopping = document.querySelector('.fa-cart-shopping');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const menu = document.querySelector('.menu');
const products = document.querySelector('.product');
const rev =document.querySelector('.Review');
const Contact =document.querySelector('.Contact');
const blogs =document.querySelector('.Blogs');
const shopping =document.querySelector('.fa-cart-shopping');
const bars =document.querySelector('.fa-bars');
const white_menu =document.querySelector('.white_menu');


const home2 = document.querySelector('.home2');
const about2 = document.querySelector('.about2');
const menu2 = document.querySelector('.menu2');
const products2 = document.querySelector('.product2');
const rev2 =document.querySelector('.Review2');
const Contact2 =document.querySelector('.Contact2');
const blogs2 =document.querySelector('.Blogs2');



/*-------- white menu -------*/ 

bars.addEventListener('click' , () => {
    white_menu.classList.toggle('active');
})


window.addEventListener('resize' , () => {
if(screenX <= 263){
white_menu.classList.remove('active'); 
}})

/*----------- End ----------*/



glass.addEventListener('click', () => {
    div_search.classList.toggle('active');
    div_search_input.classList.toggle('active');
})


fa_cart_shopping.addEventListener('click', () => {
    div_of_shopping.classList.toggle('active');
})





home.addEventListener('click', () =>{
    window.scrollTo(0,0);
})
about.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,934.9601440429688);
    }else if(screenX >=263 && screenX <= 563){
        window.scrollTo(0,934.9601440429688);
    }
})
menu.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,1870.5);
    }else if(screenX >=263 && screenX <= 563){
        window.scrollTo(0,2160);
    }
})
products.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,2943.75);
    }else if(screenX >=263 && screenX <= 563){
        window.scrollTo(0,3550);
    }
})
rev.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,3980.75);
    }else if(screenX >=263 && screenX <= 563){
        window.scrollTo(0,6050);
    }
})
Contact.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,5020.75);
    }else if(screenX >=263 && screenX <= 563){
        window.scrollTo(0,8600);
    }
})
blogs.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,5900.5);
    }else if(screenX >=263 && screenX <= 563){
        window.scrollTo(0,10000);
    }
})






home2.addEventListener('click', () =>{
    window.scrollTo(0,0);
})
about2.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,934.9601440429688);
    }else{
        window.scrollTo(0,934.9601440429688);
    }
})
menu2.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,1870.5);
    }else{
        window.scrollTo(0,2160);
    }
})
products2.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,2943.75);
    }else{
        window.scrollTo(0,3550);
    }
})
rev2.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,3980.75);
    }else{
        window.scrollTo(0,6050);
    }
})
Contact2.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,5020.75);
    }else{
        window.scrollTo(0,8600);
    }
})
blogs2.addEventListener('click', () =>{
    if(screenX <= 263){
    window.scrollTo(0,5900.5);
    }else{
        window.scrollTo(0,10000);
    }
})






