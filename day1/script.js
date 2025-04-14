// gsap.to(".box",{
//     y: 295,
//     opacity:1,
//     rotate:360,
//     duration : 1.5,
//     stagger:0.5
// })

// gsap.to(".box",{
//     opacity:1,
//     duration:1,
//     y:295,
//     stagger:0.4,
//     repeat:-1,
//     yoyo:true

// })

let tl = gsap.timeline()

tl.from("h2",{
    opacity:0,
    y:-25,
    duration:1,
    delay:0.5
})
tl.from("a",{
    opacity:0,
    y:-25,
    duration:1,
    stagger:0.35
})
tl.from("h1",{
    opacity:0,
    y:20,
    duration:0.5,
    scale:0.1
})