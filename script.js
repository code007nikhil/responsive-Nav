var nav = document.querySelector(".menu ul");
var openBtn = document.querySelector(".ham")
var closeBtn = document.querySelector(".cross")

openBtn.addEventListener("click",()=>{
    nav.style.transform = `translateX(-200px)`
    openBtn.style.display = "none"
})
closeBtn.addEventListener("click",()=>{
    nav.style.transform = `translateX(200px)`;
    if (window.innerWidth < 600) {
        openBtn.style.display = "block"
    }
})
window.addEventListener("resize",function(){

        if (window.innerWidth > 600) {
            openBtn.style.display = "none"
        }
        else{
            openBtn.style.display = "block"
        }

})