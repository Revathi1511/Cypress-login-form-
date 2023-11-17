window.onload = pageReady;

function pageReady() {
  let form = document.forms.formName;

  form.onsubmit = function() {

    // USERNAME
    let username = form.username;
    if (username.value == "") {
        username.classList.add("login__txt_error");
        // username.style.background = "red";
        username.focus();
        return false;
    } 
    else {
      username.classList.remove('login__txt_error');
    }

    // PASSWORD
    let password = form.password;
    if (password.value == "") {
      password.classList.add('login__txt_error');
      // .style.background = "red";
      // username.style.background = "white";
      password.focus();
      return false;
    } 
    else {
      password.classList.remove('login__txt_error');
    }

    let nameOutput = document.getElementById("uName");
    let passwordOutput = document.getElementById("passWord");

    document.getElementById("output").style.display = "block";
    nameOutput.innerHTML = form.username.value;
    passwordOutput.innerHTML = form.password.value;

    return false;
  };
}
