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

const getData = () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
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
    alert("Enter Email");
  }
  if (pass == confirm_pass) {
    password = pass;
  } else {
    alert("Password doesn't match");
  }
  if (male.checked == true && female.checked == true) {
    alert("Select only one Gender");
  } else if (male.checked == true) {
    gender = "Male";
    female = null;
  } else if ((female.checked = true)) {
    gender = "Female";
    male = null;
  } else {
    alert("Select Gender");
  }
  let birth_date;
  if (year == "") {
    alert("Please Enter birth details");
  } else {
    birth_date = date + "/" + month + "/" + year;
  }
  if (inch.length == 0) {
    height = foot + " foot" + inch + " cm";
  } else {
    height = inch + " cm";
  }
  if (wt.length == 0) {
    alert("Enter weight");
  } else {
    weight = wt + " " + unit;
  }
  let x = new User();
  if (
    email.length > 0 &&
    password.length > 0 &&
    (male.checked == true || female.checked == true) &&
    year != "" &&
    wt.length != 0 &&
    inch.length != 0
  ) {
    x.signUp(email, password, gender, birth_date, height, weight);
    // console.log(users);

    localStorage.setItem("user", JSON.stringify(users));

    alert("signup successfull");
  } else {
    alert("Fill input properly");
  }
};
