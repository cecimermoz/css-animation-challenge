let logos = document.getElementById("logos");
let boton = document.getElementById("boton");
let zocalo = document.getElementById("zocalo");
let foto = document.getElementById("foto");
let foto2 = document.getElementById("foto-2");
let i = 0;
let animaciones = [
    function placa1(){
        foto.style.backgroundImage = "url(lima.jpg)"; 
        zocalo.style.animation = "texto 500ms ease-in forwards";
        zocalo.style.mozanimation = "texto 7000ms ease-in 400ms forwards";
        zocalo.style.msanimation = "texto 7000ms ease-in 400ms forwards";
        zocalo.style.oanimation = "texto 7000ms ease-in 400ms forwards";
        boton.style.webKitAnimationPlayState = "running";
        boton.style.mozanimation = "running";
        boton.style.msanimation = "running";
        boton.style.oanimation = "running";
    },
    function placa2(){
        foto2.style.animation= "imagen 2500ms ease-in forwards";
        zocalo.style.animation = "texto-2 500ms ease-in 200ms forwards";
        setTimeout(() => {
        foto.style.backgroundImage = "url(cusco.jpg)"
        }, 2000); 
    },
    function placa3(){
        foto2.style.animation = "imagen-2 2500ms ease-in backwards";
        zocalo.style.animation = "texto-3 500ms ease 200ms forwards";
        setTimeout(() => {
            foto.style.backgroundImage = "url(arequipa.jpg)";
            if(i == 0){
            setTimeout(() => {
                boton.classList.remove("boton");
            }, 490);
            }
        }, 2000);  
    },
];

function run(){
    animaciones[0]();

    setTimeout(() => {
        animaciones[1]();
    }, 2500);

    setTimeout(() => {
        animaciones[2]();
    }, 5000);
    
    setTimeout(() => {
        boton.classList.add("boton");
        i++;
        animaciones[0]();
    }, 7500);

    setTimeout(() => {
        animaciones[1]();
    }, 10000);
    
    setTimeout(() => {
        animaciones[2]();
    }, 12500);
}

run();