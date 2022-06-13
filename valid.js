function btn() {
	var input = document.getElementById("input").value;
	var subs = ["Admin"];

	for (let i = 0; i < subs.length; i++) {
	  if (input.includes(subs[i])) {
		location.replace("home.html");
	  } else {
		alert("Name Incorrect");
		location.replace("index.html");
	  }
	}
  }

function btn_pass() {
	var input_pass = document.getElementById("input_pass").value;
	var subs_pass = ["Root"];

	for (let i = 0; i < subs_pass.length; i++) {
		if (input_pass.includes(subs_pass[i])) {
		  location.replace("home.html");
		} else {
		alert("Password Incorrect");
		  location.replace("index.html")
		}
	  }
}
