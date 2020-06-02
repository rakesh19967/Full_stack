function validate(){
    var mob=document.getElementById("txtmobile").value;
    var user=document.getElementById("txtusername").value;
    var email=document.getElementById("txtEmailid").value;
    var roll=document.getElementById("txtRollNum").value;
    var m=/^[6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9._-]{6,18}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
    if(mob=='' || user=='' || email=='' || roll ==''){
        window.alert('please enter all the fields');
        return false;
    }
    else{
        if(m.test(mob)&&e.test(email)&&r.test(roll)){
            window.alert("valid");
            return true;
        }
        else{
            window.alert("Invalid");
            return false;
        }

    }
}