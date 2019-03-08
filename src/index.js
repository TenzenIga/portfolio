import style from "./_scss/main.scss";
import {htmlCircle, cssCircle, jsCircle} from './js/bars';
import PageController from './js/pageAnimation';
import { ProjectsUI} from './js/projects';
import Typed from 'typed.js';
import Menu from './js/navbar';
import initMap from './js/google_map';

const options = {
  strings: ["Frontend", "Backend", "Web разработчик"],
  typeSpeed: 100,
  smartBackspace: true,
  loop:true
}







function eventListeners(){
    const pageController = new PageController();
    const navMenu = new Menu();
    const projectsIU = new ProjectsUI();
    const typed = new Typed(".typed-text", options);
    window.initMap = initMap;  
}

document.addEventListener("DOMContentLoaded", function(){
    eventListeners()
})





