const li = document.querySelectorAll("nav li")

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