export default class Slider{
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