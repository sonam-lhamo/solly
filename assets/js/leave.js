const button = document.querySelector("#submitBtn");
//getting the element from the html file
const usernameE1 = document.querySelector("#username");
// const passwordE1 = document.querySelector("#Password");
const form = document.querySelector("#container1");

button.addEventListener("click", function (e) {
  checkUsername();
  console.log("aplle");
  //   let isPasswordValid = checkPassword(),
  //     isUsernameValid = checkUsername();
  //   let isFormValid = isPasswordValid && isUsernameValid; //submit to server if the form is valid
  //   if (isFormValid) {
  //     confirm("Are you sure you want to login."); //to get final confirmation or to reset the data if the information is wrong.
  //     return true;
  //   } else {
  //     e.preventDefault(); //prevent the form from submitting
  //   }
});

//function to validate the username
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameE1.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments
  if (!isRequired(username)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameE1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else if (!isUsernameValid(username)) {
    showError(usernameE1, "Username is not valid! ");
    //calling the showsuccess function with two arguments
  } else {
    showSuccess(usernameE1);
    valid = true;
  }
  return valid;
};

//Regular expression to validate the student name pattern
const isUsernameValid = (username) => {
  const re =
    /^([A-Z]{1}[a-zA-Z]+)(\s[A-Z]{1}[a-zA-Z]+)?(\s[A-Z]{1}[a-zA-Z]+)?$/;
  return re.test(username);
};

//reusable code
//Function to check whether the input section is empty or not
const isRequired = (value) => (value === "" ? false : true);
//Function to check the length of the the character in the input section
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

//reusable code
//Regulating the css classes according to the validation
const showError = (input, message) => {
  //get the form field element
  const formField = input.parentElement;
  //add the error class
  formField.classList.remove("success");
  formField.classList.add("error");
  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the form field element
  const formField = input.parentElement;
  //remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");
  //hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

$(document).ready(function () {
  $(".profile .icon_wrap").click(function () {
    $(this).parent().toggleClass("active");
    $(".notifications").removeClass("active");
  });

  $(".notifications .icon_wrap").click(function () {
    $(this).parent().toggleClass("active");
    $(".profile").removeClass("active");
  });

  $(".show_all .link").click(function () {
    $(".notifications").removeClass("active");
    $(".popup").show();
  });

  $(".close").click(function () {
    $(".popup").hide();
  });
});
