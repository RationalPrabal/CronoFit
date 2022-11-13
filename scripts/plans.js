import { navbar } from "../afterloginnavbar/loginnavbar.js";
import { footer,support } from "../afterloginnavbar/footer.js"

document.getElementById("navbar").innerHTML =  navbar() 
document.getElementById("footer").innerHTML = footer()
document.getElementById("support").innerHTML = support()


document.getElementById("blog").addEventListener('click',gotoblog)
function gotoblog(){
    window.open("blog.html")
}

//changing gold div values
document.getElementById('annual').addEventListener('change',changevalue1)

document.getElementById('monthly').addEventListener('change',changevalue2)

function changevalue1(){
    document.getElementById('dollar').innerText = "$49.99"
}

function changevalue2(){
    document.getElementById('dollar').innerText = "$8.99"
}


let icon = document.getElementById("icon")
icon.addEventListener('click',redirect)

function redirect(){
    window.location.href = 'index.html'
}
