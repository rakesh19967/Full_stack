function validate(){
    var result="";
    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();

    if(result == "") return true;

    alert("validation Result:\n\n" + result);
    return false;
}

function validateName(){
    var name= document.getElementById("name")[0].value;
    if(name.length <= 3)
        return "Name should be at least three characters.\n";
    return "";
}

function validatePassword(){
    var password = valueOf("password");
    var retype = valueOf("retype_password");

    if (password.length <= 6)
    return "Password should be at least 6 characters.\n";

    if (password !=retype)
        return "Password do not match.\n";
    return "";
}

function validateEmail(){
    var email=valueOf("email");
    var retype = valueOf("retype_email");

    if (email.indexOf('@') == -1)
        return "Email should be a valid address.\n";

    if (email!= retype)
        return "Email addresses do not match.\n";
    return "";
}

function validateTerms(){
    var terms = document.getElementById("terms")[0];
    if (!terms.checked)
    return "please acept the terms of service and privacy policy";
    return "";
}

function valueOf(name){
    return document.getElementById(name)[0].value;
}