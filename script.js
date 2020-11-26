
function getMessage(){
    var message = document.getElementById("entry").value;
    document.getElementById("question").innerHTML = message;

    document.getElementById("entry").value = ""

    function validateForm(){
        var entry = document.forms["myForm"]["entry"].value;
        if (entry.length<1) {
            document.getElementById('error').innerHtML = "Please enter value to pass*"
        }
    }
    
}
