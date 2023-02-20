function validatePassword(){
    event.preventDefault();
}

function confirmPassword(){
    //console.log("Hi from confirm password")
    let confiPwd = document.getElementById("cpwd").value;
    let password = document.getElementById("pwd").value;
    // console.log(confiPwd);
    if(confiPwd != password){
        document.getElementById("errMsg").innerText = 'Password not matching';
    }
    //you should not put else part in this type of cases because it will keep repeating, else part will keep repeating 
    //password matching, password matching, password matching......................like that 
    //i am bothered only if the password is not matching 
    //if the password is matching then i am not bothered  
    else{
        document.getElementById("errMsg").innerText = '';
    }
}