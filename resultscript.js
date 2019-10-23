MySql.Execute(
	"sql12.freemysqlhosting.net",
	"sql12309203",
	"x7LvCC4Wyq",
	"sql12309203",
	"select * from medicalrecord",
	function (data) {
		makeList(data.Result);
	}
);

function makeList(array) {
	var table = document.getElementById("resultTable")
	
	var header = table.insertRow();
	
	
	var xco11 = header.insertCell(0).innerHTML = "ID";
	var xco12 = header.insertCell(1).innerHTML = "First Name";
	var xco13 = header.insertCell(2).innerHTML = "Last Name";
	var xco14 = header.insertCell(3).innerHTML = "Dob";
	var xco15 = header.insertCell(4).innerHTML = "Gender";
	var xco16 = header.insertCell(5).innerHTML = "Street Address";
	var xco17 = header.insertCell(6).innerHTML = "Town";
	var xco18 = header.insertCell(7).innerHTML = "Postcode";
	var xco19 = header.insertCell(8).innerHTML = "Phone";
	var xco110 = header.insertCell(9).innerHTML = "HIV/AIDS";
	var xco111 = header.insertCell(10).innerHTML = "Height";
	var xco112 = header.insertCell(11).innerHTML = "Weight";
	var xco113 = header.insertCell(12).innerHTML = "Current Disease";
	var xco114 = header.insertCell(13).innerHTML = "Sugar Level";
	var xco115 = header.insertCell(14).innerHTML = "Past Medical History";
	var xco116 = header.insertCell(15).innerHTML = "Past Surgery";
	var xco117 = header.insertCell(16).innerHTML = "Email";

	
	for(var i = 0; i < array.length; i++) {
		console.log(array[i]);
		
		var row = table.insertRow()
		var co11 = row.insertCell(0).innerHTML = array[i].entrynumber;
		var co12 = row.insertCell(1).innerHTML = array[i].firstname;
		var co13 = row.insertCell(2).innerHTML = array[i].lastname;
		var co14 = row.insertCell(3).innerHTML = array[i].dob;
		var co15 = row.insertCell(4).innerHTML = array[i].gender;
		var co16 = row.insertCell(5).innerHTML = array[i].streetaddress;
		var co17 = row.insertCell(6).innerHTML = array[i].town;
		var co18 = row.insertCell(7).innerHTML = array[i].postcode;
		var co19 = row.insertCell(8).innerHTML = array[i].phonenumber;
		var co110 = row.insertCell(9).innerHTML = array[i].hiv;
		var co111 = row.insertCell(10).innerHTML = array[i].height;
		var co112 = row.insertCell(11).innerHTML = array[i].weight;
		var co113 = row.insertCell(12).innerHTML = array[i].currentdisease;
		var co114 = row.insertCell(13).innerHTML = array[i].sugarlevel;
		var co115 = row.insertCell(14).innerHTML = array[i].pastmedicalhistory;
		var co116 = row.insertCell(15).innerHTML = array[i].pastsurgery;
		var co117 = row.insertCell(16).innerHTML = array[i].email;

		
	}
}