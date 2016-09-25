function p() {
    var pass1 = document.getElementById("pw").value;
    var pass2 = document.getElementById("pw2").value;
    var ok = true;
    if (pass1 != pass2) {
        //alert("Passwords Do not match");
        ok = false;
        alert("The passwords don't match");
    }
    else if(pass1.length <8)
{
	alert("The passwords are not at least 8 characters long");

}
    else {
        alert("Passwords Match!!!");
    }

}
function d() {
var txt = document.getElementById("texts");
var bgr1= document.getElementById("bgr").value;
var bgg1= document.getElementById("bgg").value;
var bgb1= document.getElementById("bgb").value;
var br1 = document.getElementById("br").value;
var bg1 = document.getElementById("bg").value;
var bb1 = document.getElementById("bb").value;
var wid = document.getElementById("width").value;

txt.style.backgroundColor = "rgb("+bgr1+","+bgg1+","+bgb1+")";
txt.style.borderColor ="rgb("+br1+","+bg1+","+bb1+")";
txt.style.borderWidth=wid;



}


//stackoverflow.com/questions/2173229/how-do-i-write-a-rgb-color-value-in-javascript
//http://stackoverflow.com/questions/16990378/javascript-form-validation-with-password-confirming USED THIS
