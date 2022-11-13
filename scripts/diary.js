import { navbar } from "../afterloginnavbar/loginnavbar.js";
import { footer,support } from "../afterloginnavbar/footer.js"

document.getElementById("navbar").innerHTML =  navbar() 
document.getElementById("footer").innerHTML = footer()
document.getElementById("support").innerHTML = support()

let icon = document.getElementById("icon")
icon.addEventListener('click',redirect)

function redirect(){
    window.location.href = 'index.html'
}


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
        let obj = el
        let td1 = document.createElement('td')
        td1.innerText = el.td1
        let id = el.id
        
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
        tr.addEventListener('click',function(){
            tr.style.backgroundColor = "rgb(199,199,215)"
            let  addtodesbtn = document.getElementById("addtodesbtn")

            addtodesbtn.style.display = "flex"
            
            addtodesbtn.addEventListener('click',function(){
                sendthedata(obj,id)
            })

        })
        document.getElementById("itemtbody").append(tr)
    })
}


async function sendthedata(obj){
    let res =   await fetch (`http://localhost:3000/sentdata`,{
        method:"POST",
        body: JSON.stringify(obj),

        headers:{
            'Content-Type': 'application/json'
        }
      })
      
    let data = await res.json()

    
      
      
}
appedtodes()
async function appedtodes(){
    document.getElementById('destbody').innerHTML = null
    let res= await fetch (`http://localhost:3000/sentdata`)
    let data = await res.json()
    console.log(data)
    data.forEach(function(el){
        let tr = document.createElement('tr')
        let id = el.id
        let td1 = document.createElement('td')
        td1.innerText = el.td1
    td1.style.color = 'black'
        let td2 = document.createElement('td')
        td2.innerText = el.amount
        td2.style.textAlign = 'end'
        td2.style.paddingRight = '10px'
        td2.style.color = 'black'
        let td3 = document.createElement('td')
         td3.innerText = el.unit
         td3.style.textAlign = 'start'
         td3.style.paddingLeft = '10px'
         let td4 = document.createElement('td')
         td4.innerText = el.calorie

         let td5 = document.createElement('td')
         td5.innerText = "-"
         td5.className = "removebtn"
         td5.addEventListener('click',function(){
          remove(id)
         })
         tr.append(td1,td2,td3,td4,td5)
         console.log(tr)
        let destbody = document.getElementById('destbody')
         destbody.append(tr)
    })
}

async function remove(id){

    let res = await fetch(`http://localhost:3000/sentdata/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json'
        }

    })

    let data = await res.json();

    appedtodes(data)
}