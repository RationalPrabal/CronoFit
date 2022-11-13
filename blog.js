// importing navbar

import { navbar } from "./navbar.js";

let nav= document.getElementById("navbar");
nav.innerHTML=navbar();

//importing footer





const directToHome=()=>{
window.location.href="index.html"
}

document.querySelector(".site-logo").addEventListener("click", directToHome);