function Logout() {

	var userid = localStorage.getItem("maddrugs");
	//reset local storage
	if (userid!=null){
		localStorage.clear();
		userid=null;
		alert ("You have successfully sign out!");
	}
	else{
		alert("You have not signed in yet!");
	}
	return false;
}