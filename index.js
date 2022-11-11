
import { navbar } from "./nav-components/navbar.js";
import { footer } from "./footer/footer.js"



let div=document.getElementById ("navbar")
div.innerHTML=navbar()


let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer()

let image=document.querySelector(".site-logo")
image.addEventListener("click",function(){

    window.location.href="index.html"

})