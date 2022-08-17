function validateLogin(){
	var first__name = document.querySelector("#first__name");
	var last__name = document.querySelector("#last__name");
	var password = document.querySelector("#password");
	var email = document.querySelector("#email");
	var error_msg = document.querySelector(".error__msg");
	var error_msg__last = document.querySelector(".error__msg__last");
	var error_msg__password = document.querySelector(".error__msg__password");
	var error_msg__email = document.querySelector(".error__msg__email");
	var error__icon__last = document.querySelector(".error__icon__last")
	var error__icon__first = document.querySelector(".error__icon__first")
	var error__icon__password = document.querySelector(".error__icon__password")
	var error__icon__email = document.querySelector(".error__icon__email")

	if(first__name.value.length == 0 || last__name.value.length == 0 || password.value.length == 0 || email.value.length == 0  ){
		error_msg.style.display = "inline-block";
		error_msg__last.style.display = "inline-block";
		error_msg__password.style.display = "inline-block";
		error_msg__email.style.display = "inline-block";
		error__icon__last.style.opacity = "1";
		error__icon__first.style.opacity = "1";
		error__icon__password.style.opacity = "1";
		error__icon__email.style.opacity = "1";
		first__name.style.border = "1px solid #f74040";
		last__name.style.border = "1px solid #f74040";
		password.style.border = "1px solid #f74040";
		email.style.border = "1px solid #f74040";
	}
	else if (first__name.value.length !== 0 || last__name.value.length !== 0 || password.value.length !== 0 || email.value.length !== 0){
		error_msg.style.display = "none";
		error_msg__last.style.display = "none";
		error_msg__password.style.display = "none";
		error_msg__email.style.display = "none";
		error__icon__last.style.opacity = "0";
		error__icon__first.style.opacity = "0";
		error__icon__password.style.opacity = "0";
		error__icon__email.style.opacity = "0";
		first__name.style.border = "1px solid hsl(246, 25%, 77%)";
		last__name.style.border = "1px solid hsl(246, 25%, 77%)";
		password.style.border = "1px solid hsl(246, 25%, 77%)";
		email.style.border = "1px solid hsl(246, 25%, 77%)";
	}
	
}
