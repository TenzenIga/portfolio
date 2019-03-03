import style from "./_scss/main.scss";
import {htmlCircle, cssCircle, jsCircle} from './js/bars';
import {projectMenu, projects} from './js/projects';
import Typed from 'typed.js';

var options = {
  strings: ["Frontend", "Backend", "Web разработчик"],
  typeSpeed: 100,
  smartBackspace: true,
  loop:true
}

var typed = new Typed(".typed-text", options);

import initMap from './js/google_map';
window.initMap = initMap;


const menuItems = document.querySelectorAll('.menu-item');
const pages = document.querySelectorAll('.page')

const outClass = 'pt-page-moveToBottom';
const inClass = 'pt-page-scaleUp';
let animationComplete = true;
menuItems.forEach(item => item.addEventListener('click', changePage))

pages.forEach(page=> page.addEventListener('animationend', removeAnimation));

function changePage(){
    if(!animationComplete) return;
    animationComplete= false;
    const newPage= document.querySelector(`.${this.dataset.name}`)
    const prevPage = document.querySelector('.page_active');
    const current=document.getElementsByClassName('current')
    addAnimation(prevPage, newPage)
    current[0].classList.remove('current')
    this.classList.add('current')  
}

function addAnimation(prevPage, newPage){
    if(newPage.classList.contains('page_active')) return false;
    prevPage.classList.add(outClass);
    newPage.classList.toggle(inClass)
    newPage.classList.add('page_active')   
}
function removeAnimation(e){
    if(e.animationName =='moveToBottom'){
        this.classList.remove('page_active');
        this.classList.remove(outClass);
    }else{
        this.classList.remove(inClass)
        animationComplete = true;
    }
    
}







