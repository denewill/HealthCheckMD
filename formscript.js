function formSubmission() {
	var form = document.getElementById("myform");
	
	var firstName = form.elements["First Name"].value;
	var lastName = form.elements["Last Name"].value;
	var dob = form.elements["date"].value;
	var gender = form.elements["gender"].value;
	var streetaddress = form.elements["Street Address"].value;
	var subtown = form.elements["Suburb/town"].value;
	var postcode = form.elements["Postcode"].value;
	var email = form.elements["email"].value;
	var phone = form.elements["Phone Number"].value;
	var hiv = form.elements["hiv"].value;
	var height = form.elements["Height"].value;
	var weight = form.elements["Weight"].value;
	var diseases = form.elements["divs"].value;
	var sugar = form.elements["suga"].value;
	var desc1 = form.elements["desc1"].value;
	var desc2 = form.elements["desc2"].value;
	var userid = localStorage.getItem("maddrugs");
	
	var query = "insert into medicalrecord (firstname,lastname,dob,gender,streetaddress,town,postcode,email,phonenumber,hiv,height,weight,currentdisease,sugarlevel,pastmedicalhistory,pastsurgery, userid) values (" +
		"'" + firstName + "'," +
		"'" + lastName + "'," +
		"'" + dob + "'," +
		"'" + gender + "'," +
		"'" + streetaddress + "'," +
		"'" + subtown + "'," +
		"'" + postcode + "'," +
		"'" + email + "'," +
		"'" + phone + "'," +
		"'" + hiv + "'," +
		"'" + height + "'," +
		"'" + weight + "'," +
		"'" + diseases + "'," +
		"'" + sugar + "'," +
		"'" + desc1 + "'," +
		"'" + desc2 + "'," +
		"'" + userid + "')";
	
	//only let the user enters when they have signed in
	if( userid != null ) {
		MySql.Execute(
			"remotemysql.com",
			"Onut0apAOd",
			"kHKpw4tYSY",
			"Onut0apAOd",
			query,
			function (data) {
				console.log("Submitted");
				console.log(data);
			}
		);
		alert("You have submitted new record!");
		return true;
	}
	else{
		alert("Please login first");
		return false;
	}
}