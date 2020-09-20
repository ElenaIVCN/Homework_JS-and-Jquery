$(function() {
    console.log( "ready!" );
    addEvents();
});

function addEvents() {
    let $buttonElements= $("#submitButton");
        $buttonElements.on("click", onSubmitClick );
}

function onSubmitClick()
{
    let $isFirstNameValid = isTextInputValid($("#firstName")); 
    let $isLastNameValid = isTextInputValid($("#lastName"));
    let $isGenderValid = isGenderInputValid();
    let $isMsgBoxValid = isMsgBoxInputValid();

    if( $isFirstNameValid && $isLastNameValid &&
        $isGenderValid &&
        $isMsgBoxValid ) {

        let $newElement= $("<div>Hello, </div>");
        $newElement.html($newElement.html() + $("#firstName").val());
        $("form").append($newElement);
    }
}

function isTextInputValid($idp)
{
    if ($idp.val() === "") {
        $idp.addClass("invalidInput");

        return false;
    } else {
        $idp.removeClass("invalidInput");

        return true;
    }
}

function isGenderInputValid()
{
    if ($("#male").prop("checked") || $("#female").prop("checked")) {
        $("#gender").removeClass("invalidInput");

        return true;
    } else {
        $("#gender").addClass("invalidInput");

        return false;
    }
}

function isMsgBoxInputValid()
{
    let $idp = $("#msg"); 
    if ($idp.val() === "") {
        $idp.addClass("invalidInput");

        return false;
    } else {
        $idp.removeClass("invalidInput");

        return true;
    }
}
