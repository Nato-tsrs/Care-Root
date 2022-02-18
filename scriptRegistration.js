const userName=document.getElementById("usersName");
const userPassword=document.getElementById("userPassword");
const usernameWarning=document.getElementById("UsernameWarning");
const passwordWarnign=document.getElementById("PasswordWarning");
// alert("Password is required field");

document.getElementById("signUp").addEventListener("click",check);

function check(){
   if(userName.value==="" || userPassword.value===""||userName.value.length<4||userPassword.value.length<8){
    if(userName.value===""){
        usernameWarning.textContent="User Name is required field";
        usernameWarning.style.color="red";
        userName.value="";
        userName.focus();
    }
    if( userPassword.value===""){
        passwordWarnign.textContent ="Password is required field";
        passwordWarnign.style.color="red";
        userPassword.value="";
        userPassword.focus();
       }
     if(userName.value.length<4){
        usernameWarning.textContent="User name should be at least 4 characters";
        usernameWarning.style.color="red";
     }
     if(userPassword.value.length<8){
        passwordWarnign.textContent ="Password should be at least 8 characters";
        passwordWarnign.style.color="red";
     }
   }else{
    usernameWarning.textContent="";
    passwordWarnign.textContent ="";
    window.location.href = 'WelcomePage.html';
   }
    
     
}
