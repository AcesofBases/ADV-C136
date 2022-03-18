status1="";

function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
}

function draw(){
    image(video,0,0,480,360);
}

function Start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
input=document.getElementById("object_name").innerHTML;
}

function modelLoaded(){
    console.log("Model Loaded");
    status1=true;
    
}