const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

window.addEventListener('load', () => {
    revealFunction();
})

function revealFunction(){
    window.sr = ScrollReveal({ duration:1000, distance:'50px', easing:'ease-out'});

    sr.reveal('.reveal-left', {origin:'left', reset:false});
    sr.reveal('.reveal-top', {origin:'top', reset:false});
    sr.reveal('.reveal-bottom', {origin:'bottom', reset:false});
    sr.reveal('.reveal-right', {origin:'right', reset:false});
    sr.reveal('.reveal-rotate', {origin:'bottom', rotate:{x:1000, z:1000}, reset:false});
}