import { navbar } from "../afterloginnavbar/loginnavbar.js";
import { footer,support } from "../afterloginnavbar/footer.js"

document.getElementById("navbar").innerHTML =  navbar() 
document.getElementById("footer").innerHTML = footer()
document.getElementById("support").innerHTML = support()

document.getElementById("blog").addEventListener('click',gotoblog)

function gotoblog(){
    window.location.href = "blog.html"
}

//addfoodbtn

document.getElementById('addbutton').addEventListener('click',addfood)


async function addfood(){
 document.getElementById('addfood').style.visibility = "visible"

 let res = await fetch ("http://localhost:3000/all")
    let data = await res.json()
  
    appendtoitemlist(data)
    adddiv.style.border = '1px solid rgb(201, 201, 201)'
    adddiv.style.borderBottom = 'none'
    commonfood.style.border = 'none'
}

//cancel

let cancel = document.getElementById('cancel')
cancel.addEventListener('click',hideaddfooddiv)

function hideaddfooddiv(){
    document.getElementById('addfood').style.visibility = "hidden"
}

//addfoodall

 let adddiv =    document.getElementById("all")
 adddiv.addEventListener('click',all)

async function all(){
    
    let res = await fetch ("http://localhost:3000/all")
    let data = await res.json()
  console.log(data)
    appendtoitemlist(data)

    
    adddiv.style.border = '1px solid rgb(201, 201, 201)'
    adddiv.style.borderBottom = 'none'
    commonfood.style.border = 'none'
}


//commonfood

let commonfood = document.getElementById("commonfood")
commonfood.addEventListener('click',commonfoodfun)

async function commonfoodfun(){
    
    let res = await fetch ("http://localhost:3000/all")
    let data = await res.json()
  
    appendtoitemlist(data)

    adddiv.style.border = 'none'
    commonfood.style.border = '1px solid rgb(201, 201, 201)'
    commonfood.style.borderBottom = 'none'
}


function appendtoitemlist(data){
    document.getElementById("itemtbody").innerHTML = null


    data.forEach(function(el){
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerText = el.td1
        td1.style.color = "black"
        td1.style.textAlign = 'start'
        td1.style.font = '10px'
        let td2 = document.createElement('td')
        
        let image = document.createElement('img')
        image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA+ElEQVR4Xq1UwQ3CMAzMCIzAKJFIpOTHCIzACB2FDWCDsgH8G1Q2YASwXRyKk0CgPemkyvZd7caNUhl0zjTB2/snYo3UFTE27Jw9d94eifD8l2Hv9PLizfYp1BzHZ4xhDmteigqwOGc4jlWDxy4YNrGwBjhO8OYGvMocxjD308jB2Z3sjsFdYo3MZRHHglOVOQbmSi9MEIu9PQVn2hwpR12aVurfAGNseM+qCRrpQ+i1XkCyTwTfCBrUSr+q363EZI2GNUkL6ynWCD7uIS36lWZPZnGvZiCtEa/JLMQ1SoITqcZ33FSil+J7bx6u1nQwaDql00E7mD0AiXho5PvueLsAAAAASUVORK5CYII='
        image.setAttribute('class','tdimage')

    

        td2.innerText = el.td2
        td2.style.color = "black"
        

        td2.append(image)
        tr.append(td1,td2)

        document.getElementById("itemtbody").append(tr)
    })
}



