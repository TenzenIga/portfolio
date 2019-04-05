  class Post{
      constructor(){
          this.submitBtn = document.getElementById("submit");
          this.submitBtn.addEventListener("click", this.handleRequest.bind(this))
      }
      handleRequest(e){
        e.preventDefault();
    // получаем данные формы
        let messageForm = document.forms["message-form"];
        let name = messageForm.elements["name"].value;
        let email = messageForm.elements["email"].value;
        let message = messageForm.elements["message"].value;
        // сериализуем данные в json
        let user = JSON.stringify({name: name, email: email, message:message});
        let request = new XMLHttpRequest();
        // посылаем запрос на адрес "/user"
        request.open("POST", "/send", true);   
        request.setRequestHeader("Content-Type", "application/json");
        
        request.addEventListener("load", ()=> {
        if(request.status === 400){
        this.showAlert('error',request.response)
        }else{
        this.showAlert('success',request.response)
        }
        });
        request.send(user);
    }
    

    showAlert(className ,message){
        const alertDiv = document.querySelector('.alert');
        alertDiv.innerHTML = message;
        alertDiv.classList.add(className);
        setTimeout( ()=>{
            alertDiv.classList.remove(className);
        }, 2000)
      }
  }

  export default Post;