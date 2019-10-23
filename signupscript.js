function formSubmission() {
	var form = document.getElementById("myform");
	
	var username = form.elements["myInput"].value;
	var pass = form.elements["passInput"].value;
	var email = form.elements["email"].value;
	
	var query = "insert into users values (" +
		"'" + username + "'," +
		"'" + pass + "'," +
		"'" + email + "')";
	
	MySql.Execute(
		"sql12.freemysqlhosting.net",
		"sql12309203",
		"x7LvCC4Wyq",
		"sql12309203",
		query,
		function (data) {
			console.log("Submitted");
			console.log(data);
		}
	);
	
	alert("Submitted!");
	
	return true;
}