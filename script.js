gsap.to(".imagecontainer", {
    width: "100%",
    stagger: 3
})
gsap.to(".text h1",{
    ease: Expo.easeInOut,
    top: 0,
    stagger: 3
})

gsap.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    top: "-100%",
    stagger: 3,
})



