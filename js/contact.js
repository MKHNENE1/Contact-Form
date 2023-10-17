function makered(txt) {
  txt.style.border = "1px solid red";
  txt.parentElement.children[2].style.display = "block";
  txt.parentElement.children[3].style.display = "block";
}

function makegreen(txt) {
  txt.style.border = "1px solid green";
  txt.parentElement.children[2].style.display = "none";
  txt.parentElement.children[3].style.display = "none";
}

var userErrors = true,
  emailErrors = true,
  msgErrors = true;

// function checkErrors() {
//   if (userErrors === true || emailErrors === true || msgErrors === true) {
//     console.log("Ther's Errors In Form");
//   } else {
//     console.log("Form Is Valid");
//   }
// }
// checkErrors();

let user = document.getElementById("username");
user.onblur = function () {
  if (this.value.length <= "3") {
    makered(this);
    userErrors = true;
  } else {
    makegreen(this);
    userErrors = false;
  }
  // checkErrors();
};

let email = document.getElementById("email");
email.onblur = function () {
  if (this.value.length <= "0") {
    makered(this);
    emailErrors = true;
  } else {
    makegreen(this);
    emailErrors = false;
  }
  // checkErrors();
};

let msg = document.getElementById("msg");
msg.onblur = function () {
  if (this.value.length < "10") {
    this.style.border = "1px solid red";
    this.parentElement.children[1].style.display = "block";
    this.parentElement.children[2].style.display = "block";
    msgErrors = true;
  } else {
    this.style.border = "1px solid green";
    this.parentElement.children[1].style.display = "none";
    this.parentElement.children[2].style.display = "none";
    msgErrors = false;
  }
  // checkErrors();
};

document.getElementById("contact-form").onsubmit = function (e) {
  if (userErrors === true || emailErrors === true || msgErrors === true) {
    e.preventDefault();
    user.onblur();
    email.onblur();
    msg.onblur();
  }
};
