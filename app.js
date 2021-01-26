window.addEventListener("scroll", (e)=>{
    let nav = document.querySelector("nav");
    if (window.scrollY){
        nav.style.background = "linear-gradient(to bottom, #ae85fe 0%,#8666ff 0%,#ae85fe 0%,#8666ff 100%)"
        nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)"
        setTimeout(()=>{nav.style.padding = "0.7em 1.2em"}, 200)
        
    }
    else{
        nav.style.background = "transparent"
        nav.style.boxShadow = "none"
        setTimeout(()=>nav.style.padding = "1.2em", 200)

    }
})

// window.addEventListener("load", ()=>{
//     document.querySelector("#contact-list").classList.add("add-style")
// })

// document.querySelector("#contact-list").addEventListener("click", ()=>{
//     document.querySelector("#contact-list").classList.toggle("add-style");
//     document.querySelector("#message-editing").classList.remove("add-style");
//     document.querySelector("#conversation-analytics").classList.remove("add-style");

// })

// document.querySelector("#message-editing").addEventListener("click", ()=>{
//     document.querySelector("#message-editing").classList.toggle("add-style")
//     document.querySelector("#contact-list").classList.remove("add-style");
//     document.querySelector("#conversation-analytics").classList.remove("add-style");
// })

// document.querySelector("#conversation-analytics").addEventListener("click", ()=>{
//     document.querySelector("#conversation-analytics").classList.toggle("add-style")
//     document.querySelector("#contact-list").classList.remove("add-style");
//     document.querySelector("#message-editing").classList.remove("add-style");
// })