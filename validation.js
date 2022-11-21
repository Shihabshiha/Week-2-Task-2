
  var form = document.getElementById('forms');
  var names = document.getElementById('names');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  
  
  form.addEventListener('submit',(e) => {
    e.preventDefault();
  
    checkinputs(e);
  })




function checkinputs(e){
 var namesValue = names.value.trim();
 var emailValue = email.value.trim();
 var messageValue = message.value.trim();

 if(namesValue == ''){
  setErrorFor(names, 'name cannot be blank');

 }else{
  setSuccessFor(names);
 }

 if(emailValue == ''){
  setErrorFor(email,'Email cannot be blank');
  
 }else if(!isEmail(emailValue)){
  setErrorFor(email, 'Not valid email');

 }else{
  setSuccessFor(email);
 }

 if(messageValue == ''){
  setErrorFor(message, 'Message cannot be blank');
  return
 }else{
  setSuccessFor(message);
 }


			$.ajax({
					url:"https://script.google.com/macros/s/AKfycbxNOZJTbECK1gz58DH0NG1h50JsH-7K5A6QcAVuJPJF2IaWxNf0HQn36pMkjSdpMrns/exec",
					data:$("#forms").serialize(),
					method:"post",
					success:function (response){
							 alert("Form submitted successfully")
							  window.location.reload()
							//window.location.href="https://google.com"
					},
					error:function (err){
							alert("Something Error")

					}
			})

}

function setErrorFor(input, message){

  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');

  //add error message inside small
  small.innerText= message;
  small.style.visibility = 'visible';

   
}

function setSuccessFor(input){
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.style.visibility = 'hidden';

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
