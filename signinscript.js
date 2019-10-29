function checkPassword() {
	var form = document.getElementById("myform");
	var username = form.elements["usernameInput"].value;
	var pass = form.elements["passInput"].value;
	var userid = localStorage.getItem("maddrugs");
	var query = "select userid from users where username = '" + username + "' and password = '" + pass +"'";
	
	//reset local storage
	if (userid!=null){
		localStorage.clear();
		userid=null;
	}

	MySql.Execute(
		"remotemysql.com",
		"Onut0apAOd",
		"kHKpw4tYSY",
		"Onut0apAOd",
		query,
		function (data) {
			if(data.Success == true && data.Result.length != 0) {
				console.log(data.Result[0].userid);
				localStorage.clear();
				localStorage.setItem("maddrugs", data.Result[0].userid);
				console.log(localStorage.getItem("maddrugs"));

				alert("Successfully logged in!");
			} else {
				localStorage.clear();
				alert("Username or password is wrong. \n Login failed!");
			}
		}
	);
	
	return false;
}