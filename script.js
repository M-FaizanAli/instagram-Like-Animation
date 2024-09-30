const img = document.querySelector(".container img");
const icn = document.querySelector(".container i");

img.addEventListener("dblclick", ()=>{
    icn.style.opacity = "1";
    icn.style.transform = "scale(1.5)";
    setTimeout(()=>{
        icn.style.opacity = "0";
        icn.style.transform = "scale(0)";
    }, 1000);
});