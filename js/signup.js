var userName=document.getElementById('nameInput')
var userEmail=document.getElementById('signUpEmail');
var userPass=document.getElementById('signUpPass');
var message=document.getElementById('hint')
var userContainer=[];

if(localStorage.getItem("users")!=null){
    userContainer=JSON.parse(localStorage.getItem("users"))
 }

function addEmail(){
    if(validationName() && validationEmail()==true && validationPass()==true){
    var user={
         name:userName.value,
        email:userEmail.value,
        password:userPass.value,
    }
    userContainer.push(user);
    localStorage.setItem("users",JSON.stringify(userContainer));
    message.innerHTML="success!";
    message.style.color="green";
    message.classList.remove('d-none');
    window.location = './index.html'
    
         } 
}
var btn=document.getElementById('but')

function validationName(){
   var nameWarn = document.getElementById('nameWarn')
    var text =userName.value;
    var regexName = /^[A-z]{2,50}$/
    if(regexName.test(text)){
      userName.classList.add('is-valid')
      userName.classList.remove('is-invalid')
      nameWarn.classList.add('d-none')
      btn.classList.remove('disabled')
       return true;
    }else {
      userName.classList.add('is-invalid')
      userName.classList.remove('is-valid')
      nameWarn.classList.remove('d-none')
      btn.classList.add('disabled')
    return false;
    }
 }

function validationEmail(){
   var emailWarn = document.getElementById('emailWarn')
   var text = userEmail.value;
   var regexName = /^.{5,10}\d{2}(@gmail.com)$/
   if(regexName.test(text)){
      userEmail.classList.add('is-valid')
      userEmail.classList.remove('is-invalid')
      emailWarn.classList.add('d-none')
      btn.classList.remove('disabled')
      return true;
   }else {
      userEmail.classList.add('is-invalid')
      userEmail.classList.remove('is-valid')
      emailWarn.classList.remove('d-none')
      btn.classList.add('disabled')
      return false;
   }
}

function validationPass(){
   var passWarn = document.getElementById('passWarn')
    var text =userPass.value;
    var regexName = /^.{5,10}\d{2}$/
    if(regexName.test(text)){
        userPass.classList.add('is-valid')
      userPass.classList.remove('is-invalid')
      passWarn.classList.add('d-none')
      btn.classList.remove('disabled')
      return true;
       
    }else {
      userPass.classList.remove('is-valid')
      userPass.classList.add('is-invalid')
      passWarn.classList.remove('d-none')
      btn.classList.add('disabled')
       return false;
    }
 }

  
  function repeated() {  
   var flag=0
              if(userContainer.length>0){ 
                  //4
               console.log(userContainer);
               
                for(var i=0 ; i<userContainer.length ; i++){ // 0 
                   if(userContainer[i].email == userEmail.value){
                            
                            flag=1
                   }
               }
               if (flag==1) {
                  message.innerHTML="Email already exist!";
                  message.style.color="red";
                  message.classList.remove('d-none');
                  userName.classList.add('is-invalid')
                  userEmail.classList.add('is-invalid')
                  userPass.classList.add('is-invalid')
                   
               }else{
                   addEmail()
               }
           }
          
}
btn.addEventListener('click' , function(){
   repeated()
})
    