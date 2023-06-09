//opening
document.querySelector("body").classList.add("disable-scrolling")

const tl = new gsap.timeline()
tl.fromTo(".circle-sm", {opacity:0}, {opacity:0.8, duration:0.75})
.fromTo(".circle-m", {opacity:0}, {opacity:0.7, duration:0.75})
.fromTo(".circle-l", {opacity:0}, {opacity:0.6, duration:0.75})
.fromTo("header", {y: -1000}, {y: 0, duration: 1})
.fromTo("#hero", {x:3000}, {x:0})
.fromTo("#hero-text", {opacity:0}, {opacity:1})
.then(()=>{
    document.querySelector("body").classList.remove("disable-scrolling")
})


//
//menu control
let menuState = false;
const header = document.querySelector("header")
const menuBtn = document.querySelector(".menu")
const nav = document.querySelector("nav")

window.onresize = () =>{
    if (window.innerWidth > 568){
        header.style.background="transparent"
        nav.style.display="flex"
        menuState = false
    }else{
        header.style.background="transparent"
        nav.style.display="none"
        menuState = false
    }
}

function menuSwitch(){
    if(!menuState){
        menuBtn.style.transform="rotate(180deg)"
        header.style.backgroundColor="#fff"
        nav.style.display="flex"
        menuState = true
    }else if(menuState){
        menuBtn.style.transform="rotate(0deg)"
        header.style.background="transparent"
        nav.style.display="none"
        menuState = false
    }
}

menuBtn.addEventListener("click", menuSwitch)