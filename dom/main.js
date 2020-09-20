const submit_button = document.getElementById("submitButton"); 


console.log( "ready!" );
addEvents();


function addEvents() {
    submit_button.addEventListener("click", onSubmitClick);
}

function onSubmitClick()
{
    let isFirstNameValid = isTextInputValid("firstName"); 
    let isLastNameValid = isTextInputValid("lastName");
    let isGenderValid = isGenderInputValid();
    let isMsgBoxValid = isMsgBoxInputValid();

    if( isFirstNameValid && isLastNameValid &&
        isGenderValid &&
        isMsgBoxValid) {

        var form = document.getElementById('f1');
        var elem = document.createElement('div');
        var firstName = document.getElementById("firstName");

        elem.innerHTML = 'Hello, '+ firstName.value; 
        form.appendChild(elem);
    }
}

function isTextInputValid(idp)
{
    var input_field = document.getElementById(idp);

    if (input_field.value === "") {
        var classes = document.getElementById(idp).classList;
        classes.add("invalidInput");

        return false;
    } else {
        var classes = document.getElementById(idp).classList;
        classes.remove("invalidInput");

        return true;
    }
}

function isGenderInputValid()
{
    var male_field = document.getElementById("male");
    var female_field = document.getElementById("female");

    if (male_field.checked || female_field.checked) {
        var classes = document.getElementById("gender").classList;
        classes.remove("invalidInput");

        return true;
    } else {
        var classes = document.getElementById("gender").classList;
        classes.add("invalidInput");

        return false;
    }
}

function isMsgBoxInputValid()
{
    var msg = document.getElementById("msg");

    if (msg.value === "") {
        var classes = document.getElementById("msg").classList;
        classes.add("invalidInput");

        return false;
    } else {
        var classes = document.getElementById("msg").classList;
        classes.remove("invalidInput");

        return true;
    }
}
