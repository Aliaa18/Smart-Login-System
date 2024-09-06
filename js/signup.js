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
     message.innerHTML="Success!";
     message.style.color='green';
     message.classList.remove('d-none')
    
} else if(userName.value=='' ||userEmail.value=='' || userPass.value=='') {
    message.innerHTML='All inputs are required'
    message.classList.remove('d-none');
    message.style.color='red';
}
else{
    message.innerHTML='incorrect email or password'
    message.classList.remove('d-none');
    message.style.color='red';
}
}

function validationName(){
    var text =userName.value;
    var regexName = /^[A-z]+$/
    if(regexName.test(text)){
       return true;
    }else {
     message.innerHTML="incorrect email or password!";
     message.style.color="red"
    message.classList.remove('d-none')
    return false;
    }
 }

function validationEmail(){
   var text =userEmail.value;
   var regexName = /^.{5,10}\d{2}(@gmail.com)$/
   if(regexName.test(text)){
      return true;
      
   }else {
      
      return false;
   }
}

function validationPass(){
    var text =userPass.value;
    var regexName = /^.{5,10}\d{2}$/
    if(regexName.test(text)){
       
       return true;
       
    }else {
       return false;
    }
 }
 var x = JSON.parse(localStorage.getItem("users"));
 var btn=document.getElementById('but');
   
   btn.addEventListener('click' , function(){
      if(userContainer.length>0){
         for(var i=0 ; i<userContainer ; i++){
            if(x[i].email == userEmail.value){
                message.innerHTML="The email already exist!";
                message.style.color="red";
                message.classList.remove('d-none');
            }else{
                addEmail();
            }
         }
      }else{
         addEmail();
      }
   }
   )
    