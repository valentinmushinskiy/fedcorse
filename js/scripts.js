class Slider{
    constructor(carusel, countItems, showCount = 5){
        this.carusel = carusel;
        this.showCount = showCount;
        this.countItems = countItems;
        this.right = 0;

        this.percent = 100 / this.showCount;
    }

    next = () => {
        this.right = this.right - this.percent;

        if(this.right < (this.countItems.length - this.showCount) * (this.percent * (-1))){
            this.right = 0;
        }

        this.carusel.style.left = this.right + '%'; 
    }

    prev = () => {
        this.right = this.right + this.percent;

        if(this.right > 0){
            this.right = ((this.countItems.length - this.showCount) * (this.percent)) * (-1);
        }

        this.carusel.style.left = this.right + '%'; 
    }
}

window.onload = function(){
    const countItems = this.document.querySelectorAll('.carusel_item');

    const buttonLeft = document.querySelector('.left_button');
    const buttonRight = document.querySelector('.right_button');
    const caruselWrapper = document.querySelector('.carusel');
    

    let width = this.document.documentElement.clientWidth;

    if(width > 980){
        var slider = new Slider(caruselWrapper, countItems);
    }else if(width <= 980 && width > 782){
        var slider = new Slider(caruselWrapper, countItems, 4);
    }else if(width <= 782){
        var slider = new Slider(caruselWrapper, countItems, 3);
    }
    

    buttonRight.addEventListener('click', slider.next);
    buttonLeft.addEventListener('click', slider.prev);

    if(width < 1170){
        this.setInterval(function(){
            slider.next();
        }, 3000)
    }
}