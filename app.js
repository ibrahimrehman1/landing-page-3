window.addEventListener("scroll", (e)=>{
    let nav = document.querySelector("nav");
    if (window.scrollY){
        nav.style.background = "linear-gradient(to bottom, #ae85fe 0%,#8666ff 0%,#ae85fe 0%,#8666ff 100%)"
        nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)"
    }
    else{
        nav.style.background = "transparent"
        nav.style.boxShadow = "none"


    }
})