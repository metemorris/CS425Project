// function validate() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//
//   if ( username == "test" && password == "test") {
//   alert ("Login successfully");
//
//   window.location = "admin.html"; // Redirecting to other page.
//   return false;
//   }
// }

function toggleStudent() {
  alert ("You're a student.")
  window.location = "student.html";
}

function toggleParent() {
  alert ("You're a parent.")
  window.location = "parent.html";
}

function toggleTeacher() {
  alert ("You're a teacher.")
  window.location = "teacher.html";
}

function toggleAdmin() {
  alert ("You're an admin.")
  window.location = "admin.html";
}

function loginPage() {
  alert ("Back to login page...")
  window.location = "index.html";
}

// sets a cookie

function setCookie(userid) {
  document.cookie = userid;
}

// retrieves a cookie

function getCookie() {
  var userid = decodeURIComponent(document.cookie);
  return userid;
}

// checks if a cookie is set

function checkCookie(userid) {
  var name = getCookie(userid);
  if (username != "") {
    alert("Welcome, "  = name);
  } else {
    name = prompt("There seems to be a problem, please enter your name.", "");
    if (name != "" && name != null) {
      setCookie(name);
    }
  }
}
