const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const tabs = document.querySelector('.tabs');

closeIcon.style.display = 'none';

menuIcon.addEventListener('click', () => {
  tabs.style.display = 'inline-block';
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'inline-block';
});

closeIcon.addEventListener('click', () => {
  tabs.style.display = 'none';
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'inline-block';
});

gsap.registerPlugin(ScrollTrigger);

function page1ani(){
  var tl = gsap.timeline();

tl.from('nav ul li a, nav button,.logo', {
  duration: 1,
  delay:0.4,
  opacity: 0,
  y: -30,
  stagger: 0.15
})

tl.from('.c1 h1', {
  duration: 0.5,
  opacity: 0,
  x: -300
},"-=0.5")

tl.from('.c1 p', {
  duration: 0.4,
  opacity: 0,
  x: -100
},"-=0.2")

tl.from('.c1 button', {
  duration: 0.4,
  opacity: 0
})

tl.from('.c2 img', {
  opacity: 0,
  x:200,
  duration:0.5
},"-=1")


}
page1ani()


gsap.from('.slider img', {
  opacity: 0,
  y: 10,
  stagger: 0.15,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.slider',
    start: 'top 50%', // Adjusted for mobile
    end: 'top 10%',   // Added end point for better control
    scrub: 1,
    markers: false,   // Disable markers for cleaner mobile view
  }
});


function page2ani(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'.section2',
      scroller:"body",
      start:'top 100%',
      end:'top 0%',
      scrub:2,
  
    }
  })
  
  tl2.from('.services h1',{
    opacity:0,
    y:30,
  })
  
  tl2.from('.services p',{
    opacity:0,
    y:30,
  },"-=0.3")
  
  tl2.from('.card.light',{
    opacity:0,
    x:-500,
    stagger:0.2,
    duration:1
  },"anim")
  
  tl2.from('.card.dark',{
    opacity:0,
    x:500,
    stagger:0.2,
    duration:1,
  },"anim")
}  

page2ani()

gsap.from('.cs h1', {
  opacity: 0,
  y: 30,
  scrollTrigger: {
    trigger: '.section3',
    scroller: "body",
    start: 'top 100%',
    end: 'top 0%',
    scrub: 2,
  }
});

gsap.from('.cs p', {
  opacity: 0,
  y: 30,
  scrollTrigger: {
    trigger: '.section3',
    scroller: "body",
    start: 'top 100%',
    end: 'top 0%',
    scrub: 2,
  }
});


gsap.from(".bar .txtcontnt h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".bar",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  }
});

gsap.from(".bar .txtcontnt p", {
  y: 50,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".bar",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  }
});

gsap.from(".bar .txtcontnt button", {
  scale: 0.8,
  opacity: 0,
  delay: 0.6,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".bar",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  }
});

gsap.from(".bar img", {
  x: 100,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".bar",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  }
});


gsap.from(".case-study, .divider", {
  scrollTrigger: {
    trigger: ".case-studies",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  ease: "power2.out"
},"-=2");



