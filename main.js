video = "";

 function preload(){
    video = createVideo('video.mp4')
    video.hide();

 }
 function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

 }
 function draw(){
    image(video, 0 ,0, 400, 300);
 }
 function start(){
    objectDetecor = ml5.objectDetecor('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Deteting Objects";
 }
 function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
 }