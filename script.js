const li = document.querySelectorAll(".nav_bar li a")

icons.addEventListener("click", () => {
    nav_bar.classList.toggle("active")
})

croix.addEventListener("click", () => {
    nav_bar.classList.remove("active")
})

li.forEach((li) =>{
    li.addEventListener("click", () => {
        nav_bar.classList.remove("active")
    })
})


let link = document.getElementsByClassName("link")

let currentValue = 1

function activeLink (){
    for(l of link){
        l.classList.remove("active")
    }
    event.target.classList.add("active")
    currentValue = event.target.value
}