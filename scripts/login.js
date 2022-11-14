let support = document.querySelector("#supdiv");

document.querySelector("#sup").addEventListener("click", function () {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let input = document.createElement("input");
  p.innerText = "Support";
  // p.style.color = "white";
  p.style.margin = "auto";
  input.placeholder = "How Can We Help";
  div.append(p, input);
  support.append(div);
});

let login = JSON.parse(localStorage.getItem("user"));

document.querySelector("#login").addEventListener("click", function () {
  signingin(login);
});
let note = document.getElementById("notification");

function signingin(login) {
  note.innerHTML = null;
  event.preventDefault();
  if (login.length == 0) {
    note.innerText = "No user till now";

    return;
  }
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  let flag = false;
  login.forEach(function (el) {
    if (el.email == email && el.pass == pass) {
      flag = true;
      note.innerText = "Welcome to the Crono-fit";
      // alert("Welcome to the Crono-fit");
      window.location.href = "diary.html";
    }
  });
  if (flag == false) {
    note.innerText = "Fill right details";
    // alert("Fill right details");
  }
}
