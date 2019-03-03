
const projectsMenu = document.querySelectorAll('.menu li');
const projects = document.querySelectorAll('.item-wrapper')
projectsMenu.forEach(item => item.addEventListener('click',selectProjects))
projects.forEach(project => project.addEventListener('animationend', function(e){
   
   e.target.classList.remove('visible');
     
   console.log(e);
   
}
))

 function selectProjects(){
    let animationEnd = false;
  
    const old = document.getElementsByClassName('active'); 
    old[0].classList.remove('active')
    this.classList.add('active')
    if(this.dataset.name=== 'all'){
      showAll()   
       return;
    }

    showSelected(this.dataset.name)
  
}


function showAll(){
   projects.forEach(project=>{ 
   project.classList.remove('fadeOut')
   project.classList.add('visible')
   })
}

function showSelected(type) {
   
   projects.forEach(project =>{
      project.classList.add('visible')
      if(project.classList.contains(type)){
         project.classList.remove('fadeOut')
         
      }else{
         project.classList.add('fadeOut')
      }

   })
}




export {projectsMenu, projects};