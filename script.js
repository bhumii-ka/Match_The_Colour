function randomColor(){
    let r= Math.floor(Math.random()* 256);
    let g= Math.floor(Math.random()* 256);
    let b= Math.floor(Math.random()* 256);
    return [r,g,b];

}

var bgRed= randomColor()[0];
var bgGreen = randomColor()[1];
var bgBlue = randomColor()[2];

var col=`rgb(${bgRed},${bgGreen},${bgBlue})`;

var randbg = document.getElementById("random-colour");

var canvas= document.getElementById("canvas");

var red=255;
var green=255;
var blue=255;
var dec = 3;

randbg.style.backgroundColor=col;

function noBlack(){
    if(green>=dec){
        green-=dec;
    }
    if(blue>=dec){
        blue-=dec;
    }
    if(red>=dec){
        red-=dec;
    }
}

function noR(){
    if(green>=dec){
        green-=dec;
    }
    if(blue>=dec){
        blue-=dec;
    }
}

function noG(){
    if(red>=dec){
        red-=dec;
    }
    if(blue>=dec){
        blue-=dec;
    }
}

function noB(){
    if(red>=dec){
        red-=dec;
    }
    if(green>=dec){
        green-=dec;
    }
}

function noW(){
    if(red<=255-dec){
        red+=dec;
    }
    if (blue<=255-dec){
        blue+=dec;
    }
    if(green<=255-dec){
        green+=dec;
    }
}

function allClear(){
    canvas.style.backgroundColor="rgb(255,255,255)";
    red=255;
    green=255;
    blue=255;
}

function color(de=5){
    let r=red;
    let g = green;
    let b=blue;
    canvas.style.backgroundColor=`rgb(${r},${g},${b})`;
    console.log(red-bgRed,green-bgGreen, blue-bgBlue);
    if (red-bgRed<de && red-bgRed>(-1)*de && green-bgGreen<de && green-bgGreen>(-1)*de && blue-bgBlue<de && blue-bgBlue>(-1)*de){
        canvas.innerHTML="COLOUR MATCHED CONGRATULATIONS";
        console.log("DONEEE!");
    }
    return `rgb(${r},${g},${b})`;
}

console.log(bgRed,bgGreen,bgBlue);
function solution(){
    console.log(color());
}

function keyDown(event){
    let key = event.key;
    if(key=='R' || key=='r'){
        noR();
        color(de=5);
    }else if(key=='G' || key=='g'){
        noG();
        color(de=5);
    }else if(key=='B' || key=='b'){
        noB();
        color(de=5);
    }else if(key=='W' || key=='w'){
        noW();
        color(de=5);
    }else if(key=='X' || key=='x'){
        noBlack();
        color(de=5);
    }
}

window.addEventListener('keydown',keyDown);