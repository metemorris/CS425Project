function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ( username == "test" && password == "test") {
  alert ("Login successfully");
  
  window.location = "admin.html"; // Redirecting to other page.
  return false;
  }
}

function toggleStudent() {

}

function toggleParent() {

}

function toggleTeacher() {

}

function toggleAdmin() {

}
