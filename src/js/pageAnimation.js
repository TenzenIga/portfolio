
class PageController{
    constructor(){
        this.menu = document.querySelectorAll('.nav-link');
        this.pages = document.querySelectorAll('.page')
        this.animationComplete = true;
        this.outClass = 'pt-page-moveToBottom';
        this.inClass = 'pt-page-scaleUp';
        this.menu.forEach(item => item.addEventListener('click', this.changePage.bind(this)))
        this.pages.forEach(page=> page.addEventListener('animationend', this.removeAnimation.bind(this)));
    }

    changePage(e){
        if(!this.animationComplete) return;
        this.animationComplete= false;   
        const newPage= document.querySelector(`.${e.target.dataset.name}`)
        const prevPage = document.querySelector('.page_active');
        
        this.addAnimation(prevPage, newPage)
        this.menu.forEach(link => link.classList.remove('active'))
        e.target.classList.add('active');
        
    }

    addAnimation(prevPage, newPage){
        if(newPage.classList.contains('page_active')) return false;
        prevPage.classList.add(this.outClass);
        newPage.classList.toggle(this.inClass)
        newPage.classList.add('page_active')   
    }
    
    removeAnimation(e){
        if(e.animationName =='moveToBottom'){
            e.target.classList.remove('page_active');
            e.target.classList.remove(this.outClass);
        }else{
            e.target.classList.remove(this.inClass)
            this.animationComplete = true;
        }
    }
}




export default PageController;