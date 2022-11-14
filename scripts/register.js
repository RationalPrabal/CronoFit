// import { navbar } from "./nav-components/navbar.js";
// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML = navbar();

let users = JSON.parse(localStorage.getItem("user")) || [];
class User {
  constructor() {}

  signUp(e, p, g, b, h, w) {
    this.email = e;
    this.pass = p;
    this.gender = g;
    this.birth_date = b;
    this.height = h;
    this.weight = w;
    users.push(this);
  }
}
let note = document.getElementById("notification");
const getData = () => {
  note.innerHTML = null;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirm_pass = document.getElementById("confirm_pass").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let date = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let foot = document.getElementById("foot").value;
  let inch = document.getElementById("inch").value;
  let cm = document.getElementById("cm").value;
  let wt = document.getElementById("wt").value;
  let unit = document.getElementById("units").value;

  if (email.length > 0) {
    email = email;
  } else {
    note.innerText = "Enter Email";
    // alert("Enter Email");
  }
  if (password == confirm_pass) {
    password = password;
  } else {
    note.innerText = "Password doesn't match";
    // alert("Password doesn't match");
  }
  if (male.checked == true && female.checked == true) {
    note.innerText = "Select only one Gender";
    //alert("Select only one Gender");
  } else if (male.checked == true) {
    gender = "Male";
    female = null;
  } else if ((female.checked = true)) {
    gender = "Female";
    male = null;
  } else {
    note.innerText = "Select Gender";
    //alert("Select Gender");
  }
  let birth_date;
  if (year == "") {
    note.innerText = "Please Enter birth details";
    //alert("Please Enter birth details");
  } else {
    birth_date = date + "/" + month + "/" + year;
  }
  if (inch.length == 0) {
    height = foot + " foot" + inch + " cm";
  } else {
    height = inch + " cm";
  }
  if (wt.length == 0) {
    note.innerText = "Enter weight";
    //alert("Enter weight");
  } else {
    weight = wt + " " + unit;
  }
  let x = new User();
  if (
    email.length > 0 &&
    password.length > 0 &&
    (male == null || female == null) &&
    year != "" &&
    wt.length != 0 &&
    inch.length != 0
  ) {
    x.signUp(email, password, gender, birth_date, height, weight);
    // console.log(users);

    localStorage.setItem("user", JSON.stringify(users));
    window.location.href = "./login.html";
    note.innerText = "Signup Successfull on Crono-fit";
    note.style.color = "blue";
    // alert("Signup Successfull on Crono-fit");
  } else {
    note.innerText = "Fill input properly";
    // alert("Fill input properly");
  }
};
