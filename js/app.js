document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed");

var checkbox = document.querySelector("#checkbox");
console.log(checkbox);

var check = document.querySelector("#check");
console.log(check);

//checkbox.style.visibility ="hidden";

checkbox.addEventListener("change", function(event){
	if(checkbox.checked) {
			check.style.backgroundImage ='url("images/form_ok.jpg")';
			check.style.backgroundRepeat="no-repeat";
			checkbox.style.visibility ="hidden";
	} else {
		check.style.background ="white";
	}

});

});