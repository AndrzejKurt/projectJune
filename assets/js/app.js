let navigation = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 15)
    {navigation.classList.add("navbar--move")}
    else{navigation.classList.remove(navbar--move)}
})

