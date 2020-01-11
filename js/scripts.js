window.onload = function(){

    const countItems = this.document.querySelectorAll('.carusel_item');

    const buttonLeft = document.querySelector('.left_button');
    const buttonRight = document.querySelector('.right_button');
    const caruselWrapper = document.querySelector('.carusel');
    
    class Slider{
        constructor(carusel, countItems, showCount = 5){
            this.carusel = carusel;
            this.showCount = showCount;
            this.countItems = countItems;
            this.right = 0;
        }

        next = () => {
            this.right = this.right - 20;

            if(this.right < (this.countItems.length - this.showCount) * (-20)){
                this.right = 0;
            }

            this.carusel.style.left = this.right + '%'; 
        }

        prev = () => {
            this.right = this.right + 20;

            if(this.right > 0){
                this.right = ((this.countItems.length - this.showCount) * (20)) * (-1);
            }

            this.carusel.style.left = this.right + '%'; 
        }
    }

    let slider = new Slider(caruselWrapper, countItems);

    buttonRight.addEventListener('click', slider.next);
    buttonLeft.addEventListener('click', slider.prev);
}

