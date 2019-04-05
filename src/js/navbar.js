const hamburger = document.querySelector('.hamburger');
const mainHeader =  document.querySelector('.main-header');

class Menu{
    constructor(){
        this.hamburger = document.querySelector('.hamburger');
        this.mainHeader =  document.querySelector('.main-header');
        this.showMenu = false;
        this.hamburger.addEventListener('click', this.toggleSidebar.bind(this));
        
    }
    
    toggleSidebar(){
         if(!this.showMenu){
            this.mainHeader.classList.add('show');
            this.showMenu = true;
        }else{
            this.mainHeader.classList.remove('show');
            this.showMenu = false;
        }
    }

}



export default Menu;