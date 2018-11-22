var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("form-username").value;
    var password = document.getElementById("form-password").value;
    if (username == "" || password == "" ){
        alert ("Please enter your username and password!");
        return false;
    }
    else if ( username == "admin" && password == "admin123"){
        alert ("Admin Login successfully!");
        window.location = "admin_edit_environment.html"; // Redirecting to admin page.
        return false;
    }
    else if (username == "player" && password == "player123"){
        alert ("Player Login successfully!");
        window.location = "player_menu.html"; // Redirecting to player page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("Invalid username/password!\nYou have "+attempt+" attempt left!");
        // Disabling fields after 5 attempts.
        if( attempt == 0){
            document.getElementById("form-username").disabled = true;
            document.getElementById("form-password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}




