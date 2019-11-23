
    const load = document.getElementById("loader")
    window.addEventListener("load", function(){
        // const load = document.getElementById("loader")
        load.style.transform="translateY(-100%)";
        console.log("Terminé");
    })

// window.addEventListener("load", function(){
//     const load = document.getElementById("loader")
//     load.style.transform="translateY(-100%)";
// })


const aPropos = document.querySelector(".l1")
const accueil = document.querySelector(".l2")

// aPropos.addEventListener("click",(e)=>{
//     e.preventDefault();
//     load.style.transform="translateY(0%)";
//     // document.location.href="about.html"
// })

// accueil.addEventListener("click",(e)=>{
//     e.preventDefault();
//     load.style.transform="translateY(0%)"
//     setTimeout(()=>{
//         // load.style.transform="translateY(0%)"
//         document.location.href="index.html"
//     },3000);
    
// })


var nav = document.querySelector("#header")

window.addEventListener("scroll",()=>{
    if(window.scrollY > 1 ) {
        nav.style.backgroundColor="rgba(0, 0, 0, 0.514)";
    }else{
        nav.style.backgroundColor="rgba(0, 0, 0, 0)";
    }

})



window.onload = () =>{
    window.sr = new ScrollReveal();

    sr.reveal(".skll",{
        scale: 0.8,
        origin:"top",
        distance:"50px", 
        reset: true,
        duration:1000,
        interval: 100
    })

    sr.reveal(".box",{
        delay:200,
        origin:"left",
        distance:"100px", 
        reset: true,
        duration:1000
    })

    sr.reveal(".myCs",{
        scale: 0.3,
        delay:300,
        origin:"right",
        distance:"100px", 
        reset: true,
        duration:1000
    })

   
   }