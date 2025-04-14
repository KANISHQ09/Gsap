let menu = document.querySelector(".logo i")
let cross = document.querySelector(".full ul i")

let tl = gsap.timeline()

tl.to(".full",{
    right:0,
    duration:0.7
})

tl.from(".full li",{
    x:230,
    duration:0.7,
    stagger:0.2,
    opacity:0
})

tl.from(".full i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

cross.addEventListener("click",()=>{
    tl.reverse()
})