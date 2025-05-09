let initial = `M 10 100 Q 500 100 990 100`

let final = `M 10 100 Q 500 100 990 100`

let string= document.querySelector(".string")
string.addEventListener("mousemove",function(dets){
    initial = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{d:initial},
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:final},
        duration: 1.5,
        ease:"elastic.out(1,0.2)"
        
    })
})