import { navbar } from "../afterloginnavbar/loginnavbar.js";
import { footer,support } from "../afterloginnavbar/footer.js"

document.getElementById("navbar").innerHTML =  navbar() 
document.getElementById("footer").innerHTML = footer()
document.getElementById("support").innerHTML = support()


document.getElementById("blog").addEventListener('click',gotoblog)
function gotoblog(){
    window.open("blog.html")
}
