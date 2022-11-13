let items=document.querySelector(".blocks-item-link");
items.addEventListener("click",function(){
    console.log("hi")
});

const directToHome=()=>{
    window.location.href="index.html"
    }
    
    document.querySelector(".navbar>img").addEventListener("click", directToHome);