// importing navbar

import { navbar } from "./nav-components/navbar.js";

let nav= document.getElementById("navbar");
nav.innerHTML=navbar();

//importing footer

// import { footer } from "./footer/footer.js";

// let footer_div= document.getElementById("footer_div");
// footer_div.innerHTML= footer();




const directToHome=()=>{
window.location.href="index.html"
}

document.querySelector("#navbar>:nth-child(1)>img").addEventListener("click", directToHome);