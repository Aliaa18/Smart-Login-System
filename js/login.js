var emailInput=document.getElementById('emailLogin');
var passInput=document.getElementById('passLogin');
var z = JSON.parse(localStorage.getItem("users"));
var message1=document.getElementById('hint1')


var test =localStorage.getItem('sessionName')
console.log(test);

        if(test){
       document.getElementById('hed').innerHTML="Welcome " + test
        }
function registered(){
    for(var i=0 ; i<z.length ; i++){
        if(z[i].email == emailInput.value && z[i].password==passInput.value){
            window.location = './home.html'
            localStorage.setItem('sessionName',(z[i].name));
            
        } else {
            message1.innerHTML="incorrect email or password!";
            message1.style.color="red";
            message1.classList.remove('d-none');
        }
     }
           
}

var btn1=document.getElementById('but1');
   btn1.addEventListener('click' , function(){
    if(emailInput.value=='' || passInput.value=='') {
        message1.innerHTML="All inputs are required!"
        message1.classList.remove('d-none');
        message1.style.color='red';
    }else{
        registered();
      
    }
         }

   )
 function logout(){
    localStorage.removeItem('sessionName')
 }

