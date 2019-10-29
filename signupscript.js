function formSubmission() {
	var form = document.getElementById("myform");
	var username = form.elements["userName"].value;
	var pass = form.elements["Password"].value;
	var repeatpass=form.elements["ConfirmPassword"].value;
	var query = "select userid from users where username = '" + username + "' and password = '" + pass +"'";
	var userid = localStorage.getItem("maddrugs");
	
	//reset local storage
	if (userid!=null){
		localStorage.clear();
		userid=null;
	}
	
	//check password and confirmpasword
	if (pass!="" || repeatpass!=""){
		  if (pass === repeatpass) {
			document.getElementById('message').style.color = 'green';
			document.getElementById('message').innerHTML = 'matched.';
		} 
		  else {
			document.getElementById('message').style.color = 'red';
			document.getElementById('message').innerHTML = 'not matching.';
			return false;
		}
	}
	else{
		document.getElementById('message').style.color = 'black';
		document.getElementById('message').innerHTML = 'Fill in password.';
		return false;
	}
	
	var query = "insert into users (username, password) values (" +
		"'" + username + "'," +
		"'" + pass + "')";
	
	MySql.Execute(
		"remotemysql.com",
		"Onut0apAOd",
		"kHKpw4tYSY",
		"Onut0apAOd",
		query,
		function (data) {
			console.log("Submitted");
			console.log(data);
			
			if (data.Success){
				alert("You have successfully signed up!");
			}
			else{
				alert("The username is already taken.");
			}
		}
	);
	return false;
}