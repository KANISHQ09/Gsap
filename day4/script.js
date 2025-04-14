let main = document.querySelector(".main")

let cursor = document.querySelector(".cursor")

let image = document.querySelector(".image")


main.addEventListener("mousemove",function(dets){
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out"
})
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"rgba(255, 255, 255, 0.519)"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})

