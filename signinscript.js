function checkPassword() {
	var form = document.getElementById("myform");

	var username = form.elements["usernameInput"].value;
	var pass = form.elements["passInput"].value;

	var query = "select userid from users where username = '" + username + "' and password = '" + pass +"'";
	

	MySql.Execute(
		"sql12.freemysqlhosting.net",
		"sql12309203",
		"x7LvCC4Wyq",
		"sql12309203",
		query,
		function (data) {
			if(data.Success == true && data.Result.length != 0) {
				console.log(data.Result[0].userid);
				localStorage.clear();
				localStorage.setItem("maddrugs", data.Result[0].userid);
				console.log(sessionStorage.getItem("maddrugs"));

				alert("Successfully logged in!");
			} else {
				localStorage.clear();
				alert("Username or password is wrong. \n Login failed!");
			}
		}
	);
	
	return false;
}