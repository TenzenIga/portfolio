

class ProjectsUI{
   constructor(){
      this.tabMenu = document.querySelectorAll('.menu li');
      this.projects = document.querySelectorAll('.item-wrapper')
      this.tabMenu.forEach(item => item.addEventListener('click', this.selectProjects))
      this.projects.forEach(project => project.addEventListener('animationend', function(e){
       e.target.classList.remove('visible');
    }))

   }


   selectProjects(){
      const tabMenu = document.querySelectorAll('.menu li');
      const projects = document.querySelectorAll('.item-wrapper')

    tabMenu.forEach(tab => tab.classList.remove('active'))
    projects.forEach(project => {
      project.classList.add('visible')
            if(project.classList.contains(this.dataset.name)){
               project.classList.remove('fadeOut')    
            }else{
               project.classList.add('fadeOut')
            }
    })
    if(this.dataset.name === 'all')
      projects.forEach(project=>{ 
      project.classList.remove('fadeOut')
      project.classList.add('visible')
   })
      this.classList.add('active');
    }

  
}



export {ProjectsUI};