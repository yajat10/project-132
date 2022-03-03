find_status=""
function setup(){
    canvas=createCanvas(700,500)
    canvas.center()
    object_Detection=ml5.objectDetection("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("model is loaded!");
    find_status=true;
    object_Detection.detecte(img,gotresult)
}
function preload(){
img=loadImage("AC TV.jpg")
}
function gotresult(result,error){
if(error){
    console.log(error);
}
console.log(result);
}
function draw(){
    image(img,0,0,700,500)
}