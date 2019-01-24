import style from "./_scss/main.scss";

const menuItems = document.querySelectorAll('.menu-item');


function toggleNavigation() {
    const selectedPage = document.getElementById(this.dataset.name)
    const activeSection =document.querySelector('.page-active')
    const activePage = document.querySelector('.current')
    activePage.classList.toggle('current')
    activeSection.classList.toggle('page-active')
    console.log(this.dataset.name);
    
    this.classList.toggle('current')
    selectedPage.classList.toggle('page-active')
}

menuItems.forEach(item => item.addEventListener('click', toggleNavigation))

