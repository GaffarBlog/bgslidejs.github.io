var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var headerBg = document.getElementById("header");
var bgImage = new Array(
    "../img/bg1.png",
    "../img/bg2.png",
    "../img/bg3.png",
    "../img/bg4.png",
    "../img/bg5.png",
);
let i = 0;
next.onclick = function(){
    if(i < 4){
        headerBg.style.backgroundImage = 'url("'+bgImage[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}
prev.onclick = function(){
    if(i > 0){
        headerBg.style.backgroundImage = 'url("'+bgImage[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
    
}




