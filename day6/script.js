function breaktxt() {

    let h1 = document.querySelector("h1")

    let h1txt = document.querySelector("h1").textContent

    let splittedtxt = h1txt.split("")

    let half = splittedtxt.length / 2

    let clutter = ""
    splittedtxt.forEach((elem, idx) => {
        if (idx < half)
            clutter += `<span class="a">${elem}</span>`
        else {
            clutter +=`<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
}

breaktxt()

gsap.from("h1 .a", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})

gsap.from("h1 .b", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})