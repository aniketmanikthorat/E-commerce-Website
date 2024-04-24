/*Name Validation */

function checkName(str) {
    let regExp = /^[a-zA-z]+ [a-zA-z]+$/;
    let result = regExp.test(str);

    if (result) {
        document.getElementById("s").innerHTML = "";
    }
    else {
        document.getElementById("s").innerHTML = "Invalid Name";
        document.getElementById("s").style.color = "Red";
    }
}


/* Number Validation*/
function checkNumber(str) {
    let regExp = /^[0-9]+$/;
    let result = regExp.test(str);

    if (result && str.length == 10) {
        document.getElementById("n").innerHTML = "";
    }
    else {
        document.getElementById("n").innerHTML = "Invalid Number";
        document.getElementById("n").style.color = "Red";
    }
}

/*Email Validation */
function checkEmail(str) {
    let regExp = /^[A-Za-z\.\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
    let result = regExp.test(str);

    if (result) {
        document.getElementById("e").innerHTML = "";
    }
    else {
        document.getElementById("e").innerHTML = "Invalid Email";
        document.getElementById("e").style.color = "Red";
    }
}



/* PostCode Validation*/
function checkPostCode(str) {
    let regExp = /^[0-9]+$/;
    let result = regExp.test(str);

    if (result && str.length == 6) {
        document.getElementById("p").innerHTML = "";
    }
    else {
        document.getElementById("p").innerHTML = "Invalid PostCode";
        document.getElementById("p").style.color = "Red";
    }
}

/* Credit Card Validation*/
function checkCredit(str) {
    let regExp = /^[0-9]{4}[-]+[0-9]{4}[-]+[0-9]{4}[-]+[0-9]{4}$/;
    let result = regExp.test(str);

    if (result && str.length == 19) {
        document.getElementById("c").innerHTML = "";
    }
    else {
        document.getElementById("c").innerHTML = "Invalid Credit Card";
        document.getElementById("c").style.color = "Red";
    }
}

/*CVV Validation*/
function checkCvv(str) {
    let regExp = /^[0-9]{3}$/;
    let result = regExp.test(str);

    if (result && str.length ==3) {
        document.getElementById("v").innerHTML = "";
    }
    else {
        document.getElementById("v").innerHTML = "Invalid Credit Card";
        document.getElementById("v").style.color = "Red";
    }
}
