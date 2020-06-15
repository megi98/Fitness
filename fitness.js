function validateForm() {
    if(validateName() && validatePhone() && validateEmail())
        return true;
    return false;
  }

function validateName() {
    var x = document.forms["myForm"]["name"].value;
    if (x === "") {
        alert("Попълнете име");
        return false;
    }
    var n = x.length;
    for(var i = 0; i < n; i++)
    {
        if( !((x[i] >= 'a' && x[i] <= 'z' ) || (x[i] >= 'A' && x[i] <= 'Z')) ) {
            alert("Некоректно име");
            return false;
        }
    }
    return true;
}

function validatePhone() {
    var x = document.forms["myForm"]["phone"].value;
    if( x === "" || x.length !== 10 ) {
                alert( "Невалиден или непълен номер" );
                return false;
            }
    for(var i = 0; i < x.length; i++) {
        if(x[i] < '0' || x[i] > '9') {
            alert("Невалиден номер");
            return false;
        }
    }
    return true;
}

function validateEmail() {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["myForm"]["email"].value))) {
        alert("Невалиден имейл");
        return false;
    }
    return true;
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }