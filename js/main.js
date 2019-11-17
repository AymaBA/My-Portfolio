try {
    window.addEventListener("load", function(){
        const load = document.getElementById("loader")
        load.style.transform="translateY(-100%)";
        console.log("Terminé");
    })
} catch{
    console.log("error");
} finally{
    console.log("Terminé");
    
}
// window.addEventListener("load", function(){
//     const load = document.getElementById("loader")
//     load.style.transform="translateY(-100%)";
// })

var btn = document.querySelectorAll(".hamburger")
var nav = document.querySelectorAll(".nav")

