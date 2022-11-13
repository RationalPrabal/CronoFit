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

function signingin(login) {
  event.preventDefault();
  if (login.length == 0) {
    alert("No user till now");
    return;
  }
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  let flag = false;
  login.forEach(function (el) {
    if (el.email == email && el.pass == pass) {
      flag = true;
      alert("Welcome to the Crono-fit");
      window.location.href = "diary.html";
    }
  });
  if (flag == false) {
    alert("Fill right details");
  }
}
