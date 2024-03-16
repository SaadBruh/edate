const toggle = document.querySelector("#btn-toggle")

toggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand")
})