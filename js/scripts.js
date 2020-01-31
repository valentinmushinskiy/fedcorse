import Slider from './slider.js';

window.onload = function(){

    //CARUSEL

    const countItems = this.document.querySelectorAll('.carusel_item');
    const buttonLeft = document.querySelector('.left_button');
    const buttonRight = document.querySelector('.right_button');
    const caruselWrapper = document.querySelector('.carusel');

    let width = this.document.documentElement.clientWidth;

    function elementsCount(width){
        if(width > 980){
            return 5;
        }else if(width <= 980 && width > 782){
            return 4;
        }else{
            return 3;
        }
    }

    let slider = new Slider(caruselWrapper, countItems, elementsCount(width));

    buttonRight.addEventListener('click', slider.next);
    buttonLeft.addEventListener('click', slider.prev);

    if(width < 1170){
        this.setInterval(function(){
            slider.next();
        }, 3000)
    }


    //BURGER

    const burger = document.querySelector('.burger');
    const burgerNav = document.querySelector('.burger__nav');

    burger.addEventListener('click', function(){
        burgerNav.classList.toggle('flex');
    })


    // TASK WITH CARUSEL

    const select = document.querySelector('.search__select');

    function getSelectedValue(){
        let selector = document.querySelector('.search__select').value;
        
        let a = document.getElementById(selector);
    
        a.scrollIntoView({
            behavior: "smooth"
        });
        
        a.classList.add('border');
        setInterval(function(){
            a.classList.remove('border');
        }, 3000)
    }
    
    select.addEventListener('change', getSelectedValue);
}
