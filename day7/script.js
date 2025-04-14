function wheel(){
    window.addEventListener("wheel", (dets) => {
        if (dets.deltaY > 0){
            gsap.to("#mark",{
                transform:"translateX(-200%)",
                duration:2,
                repeat:-1,
                ease:"power.out"
            
            })
            gsap.to("#mark i",{
                rotate:180,
            })
        }
        else{
            gsap.to("#mark",{
                transform:"translateX(0%)",
                duration:2,
                repeat:-1,
                ease:"power.out"
            
            })
            gsap.to("#mark i",{
                rotate:0,
            })
        }
    })
}

wheel()