import { navbar } from "../afterloginnavbar/loginnavbar.js";
import { footer,support } from "../afterloginnavbar/footer.js"

document.getElementById("navbar").innerHTML =  navbar() 
document.getElementById("footer").innerHTML = footer()
document.getElementById("support").innerHTML = support()

document.getElementById("blog").addEventListener('click',gotoblog)
document.getElementById("gridblog").addEventListener('click',gotoblog)
function gotoblog(){
    window.open("blog.html")
}

let icon = document.getElementById("icon")
icon.addEventListener('click',redirect)

function redirect(){
    window.location.href = 'index.html'
}
