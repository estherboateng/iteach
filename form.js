const button = document.querySelector('button')

button.onclick =function(){
	var username = document.case.username;
	var useryear = document.case.year;
	var useremail = document.case.email;

	var userpassword =document.case.psw;
	if (username.value =="") {}
		window.alert("Enter valid name!");  
}
    else if(useryear.value ==""){
    	window.alert("Enter valid year!");
    }
    else if(useremail.value ==""){
    	window.alert("Enter valid e-mail!");
    }
    else if(useryear.password ==""){
    	window.alert("Enter valid password!");
    }
    else{
    	window.alert('Thanks for signing up!');
    }