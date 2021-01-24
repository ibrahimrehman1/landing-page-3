window.addEventListener("scroll", (e)=>{
    let nav = document.querySelector("nav");
    if (window.scrollY){
        nav.style.background = "linear-gradient(to bottom, #ae85fe 0%,#8666ff 0%,#ae85fe 0%,#8666ff 100%)"
        nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)"
        nav.style.padding = "0.7em 1.2em"
    }
    else{
        nav.style.background = "transparent"
        nav.style.boxShadow = "none"
        nav.style.padding = "1.2em"
    }
})