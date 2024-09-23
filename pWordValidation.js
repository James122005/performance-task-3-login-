function getMessage() {
    let userName = document.getElementById("uName").value;
    let passWord = document.getElementById("pWord").value;
    
    let regEx = /[a-z0-9]{10,15}/; 
    let regUser =  /[a-zA-Z]{10, 15}/; 
    
    if (regEx.test(passWord)) {
        document.getElementById("pMsg").innerHTML = "This is a valid password!";
    } else {
        document.getElementById("pMsg").innerHTML = "Invalid password.";
    }
    
    if (regEx.test(userName)) {
        document.getElementById("pMsg").innerHTML = "This is a valid password!";
    } else {
        document.getElementById("pMsg").innerHTML = "Invalid password.";
    }
    
}//end of the function

document.getElementById('btnLogin').addEventListener("click", getMessage);


