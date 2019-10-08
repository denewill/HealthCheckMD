var passInput = document.getElementById("passInput");
var confirmPassInput = document.getElementById("confirmPassInput");

window.onload = function() {
    var subButton = document.getElementById("submit");
   subButton.onclick = function value(passForm) {
   }

};

function value(passForm) {
        if (!passForm.passInput.value.match(/[a-z]/)) {
            alert("Password must contain at least one lower case letter.");
            passForm.passInput.focus();
            return false;
        }

        if ((passForm.passInput.value).length < 8) {
            alert("Your password has less than 8 characters.");
            passForm.passInput.focus();
            return false;
        }
        
        if (passForm.confirmPassInput.value != passForm.passInput.value) {
            alert("Your confirmation password does not match.");
            passForm.passInput.focus();
            return false;
        }

        if (passForm.confirmPassInput.value == "") {
            alert("Please confirm your password.");
            passForm.passInput.focus();
            return false;
		}
		if ((passForm.passInput.value) == (passForm.confirmPassInput.value)) {
			alert("Your password has been created!");
			return true;
		}
}