let state = false;
window.addEventListener("scroll", (e)=>{
    let nav = document.querySelector("nav");
    if (window.scrollY){
        nav.style.background = "linear-gradient(to bottom, #ae85fe 0%,#8666ff 0%,#ae85fe 0%,#8666ff 100%)"
        nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)"
        document.querySelector(".move-top").classList.add("move-top-show");
        setTimeout(()=>{
            nav.style.padding = "0.7em 1.2em";
            document.querySelector(".hamburger-icon").style.top = "12px";
        }, 200)
        
    }
    else{
        nav.style.background = "transparent"
        document.querySelector(".move-top").classList.remove("move-top-show");
        nav.style.boxShadow = "none"
        setTimeout(()=>{
            nav.style.padding = "1.2em";
            document.querySelector(".hamburger-icon").style.top = "14px";
        }, 200)
        if (state){
            document.querySelector("#hidden-div").classList.remove("show-div")
            document.querySelector("#bar-1").classList.remove("tilt-1");
            document.querySelector("#bar-2").classList.remove("tilt-2");
            document.querySelector("#bar-3").classList.remove("tilt-3");
            document.querySelector("#nav-links").classList.remove("links");
            nav.classList.remove("navbar-extend");
            state = false;
        }
    }
})


document.querySelector("#burgerIcon").addEventListener("click", ()=>{
    let nav = document.querySelector(".navbar");
    document.querySelector("#bar-1").classList.toggle("tilt-1");
    document.querySelector("#bar-2").classList.toggle("tilt-2");
    document.querySelector("#bar-3").classList.toggle("tilt-3");
    document.querySelector("#nav-links").classList.toggle("links");
    document.querySelector("#hidden-div").classList.toggle("show-div")
    nav.classList.toggle("navbar-extend");
    nav.style.background = "linear-gradient(to bottom, #ae85fe 0%,#8666ff 0%,#ae85fe 0%,#8666ff 100%)"
    nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)"
    document.querySelector(".move-top").classList.add("move-top-show");
    setTimeout(()=>{
        nav.style.padding = "0.7em 1.2em";
        document.querySelector(".hamburger-icon").style.top = "12px";
    }, 200)
    state = true;

})

function minimize(){
    document.querySelector("#hidden-div").classList.remove("show-div")
    document.querySelector("#bar-1").classList.remove("tilt-1");
    document.querySelector("#bar-2").classList.remove("tilt-2");
    document.querySelector("#bar-3").classList.remove("tilt-3");
    document.querySelector("#nav-links").classList.remove("links");
    document.querySelector(".navbar").classList.remove("navbar-extend");
}