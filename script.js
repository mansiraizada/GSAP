var tl = gsap.timeline();

// tl.from("#box", {
//     x: 830,
//     y: 350,
//     backgroundColor: "yellow",
//     rotate: 360,
//     duration: 2,
//     delay: 1
// })

// tl.to("#box", {
//     y: 350,
//     x: 830,
//     backgroundColor: "crimson",
//     rotate: 360,
//     duration: 2,
//     opacity: 0
// })

tl.from('h3', {
    y: -100,
    delay: 0.3,
    duration: 0.8,
    stagger: 0.3
})

tl.from('#first', {
    x: -1000,
    duration: 0.8
})

tl.from('#sec', {
    x: -1200,
    duration: 0.8
})

tl.from('#third', {
    x: -1000,
    duration: 0.5
})

tl.from('img', {
    y: 300,
    opacity: 0,
    duration: 0.8,
    stagger: 1
})