
import { navbar } from "./nav-components/navbar.js";
import { footer } from "./footer/footer.js"



let div=document.getElementById ("navbar")
div.innerHTML=navbar()


let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer()

const directToHome=()=>{
    window.location.href="index.html"
    }
    
    document.querySelector("#navbar>:nth-child(1)>img").addEventListener("click", directToHome);